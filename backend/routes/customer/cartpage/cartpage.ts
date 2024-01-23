import express, { Request, Response } from 'express';
import pool from '../../../database';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { CartTableProps } from '../../../../frontend/app/types/Cart/CartTableProps';
import { ProductsTableProps } from '../../../../frontend/app/types/Product/ProductsTableProps';
import { CartItemProps } from '../../../../frontend/app/types/Cart/CartItemProps';

const cartpage = express();

cartpage.get('/cart', async (req: Request, res: Response) => {
  let conn;
  const tokenHeader = req.headers.authorization;
  console.log('tokenHeader--------  ', tokenHeader);
  if (!tokenHeader) {
    return res.status(401).json({ error: '토큰이 제공되지 않았습니다.' });
  }
  const token = tokenHeader.split(' ')[1];
  let userIndex: string | JwtPayload;
  try {
    // 디코딩된 데이터를 나타내는 변수입니다.
    const decoded = jwt.verify(token, '1234') as JwtPayload;
    userIndex = decoded.userIndex as string;
    // 로그 추가: 토큰 검증 및 userIndex 추출
    console.log('Token verified, userIndex:', userIndex);
  } catch (err) {
    console.error('Token verification error:', err);
    return res.status(401).json({ error: '토큰이 유효하지 않습니다.' });
  }

  // ! 위의 과정으로 로컬스토리지에서 토큰을 분해하여 userIndex를 추출하였습니다.

  // ! /cartPage 라우팅
  // * 토큰을 통해 얻어낸 userIndex를 통해 cart테이블을 참조하여 cartList를 완성한다.
  // 필수적으로 필요한 정보 : 해당 userIndex의 cartProductCount, prodIndex ( join을 통해 얻을 필수적 정보 : prodName, prodPrice, prodImgUrl)
  // 예시) userIndex가 4일 때 최종 결과물 : type은 배열, 배열의 원소는 객체
  /**
   *  result = [
   *    { userIndex : 4, cartIndex: ?, cartProductCount: ?, prodIndex: ?, prodName: ?, prodPrice: ?, prodImg: ? },
   *    { userIndex : 4, cartIndex: ?, cartProductCount: ?, prodIndex: ?, prodName: ?, prodPrice: ?, prodImg: ? },
   *  ]
   */
  // todo 1. userIndex를 참조하여 해당 행의 정보를 가져온다.
  // 예시 ) userIndex가 4인 행을 모두 배열로 가져온다.
  /**
   * 모든 값은 int로 number타입일 것이다.
   * userIndexQueryResult = [
   *  { cartIndex: ?, cartProductCount: ?, userIndex: 4, prodIndex: ? },
   *  { cartIndex: ?, cartProductCount: ?, userIndex: 4, prodIndex: ? },
   *  ...
   * ]
   */
  // todo 2. userIndexQueryResult의 prodIndex를 참조하여 products테이블에서 해당 prodIndex의 정보를 가져온다.
  // 예시 ) prodIndex가 1인 행을 모두 배열로 가져와 join을 통해 한 객체에 담는다. (필수적 정보 외 다른 정보도 담는다.)
  /**
   * 모든 숫자는 int로 타입에 대한 오류에 주의한다.
   * 모든 문자열은 varchar로 타입에 대한 오류에 주의한다.
   *
   * 예시)
   * productQueryResult = [
   *  { prodIndex: 1, prodName: ?, prodPrice: ?, prodImgUrl: "/img/images/이미지이름1", ... },
   *  { prodIndex: 2, prodName: ?, prodPrice: ?, prodImgUrl: "/img/images/이미지이름2" },
   *  ...
   * ]
   */
  // todo 3. userIndexQueryResult와 productQueryResult를 join하여 최종 결과물을 완성한다.
  /**
   * 예시) finalResult = [
   * { userIndex : 4, cartIndex: ?, cartProductCount: ?, prodIndex: ?, prodName: ?, prodPrice: ?, prodImgUrl: "?", ... },
   * { userIndex : 4, cartIndex: ?, cartProductCount: ?, prodIndex: ?, prodName: ?, prodPrice: ?, prodImgUrl: "?", ... },
   * ...
   * ]
   */

  try {
    conn = await pool.getConnection();
    let userIndexQueryResult: CartTableProps[] = [];
    let productQueryResult: ProductsTableProps[] = [];
    let finalResult: CartItemProps[] = [];

    // todo 1. userIndex를 참조하여 해당 행의 정보를 가져온다.
    userIndexQueryResult = await pool.query(
      `SELECT cartIndex, cartProductCount, userIndex, prodIndex FROM cart WHERE userIndex = ?`,
      [Number(userIndex)],
    );
    console.log('userIndexQueryResult의 결과값', userIndexQueryResult);
    console.log(
      'userIndexQueryResult의 타입 ----------',
      typeof userIndexQueryResult,
    );

    // todo 2. userIndexQueryResult의 prodIndex를 참조하여 products테이블에서 해당 prodIndex의 정보를 가져온다.
    // * prodIndexes.join(",")은 문자열이지만 sql엔진이 해석할 때는 열 타입에 맞추기 때문에 int타입으로 활용하게 된다.
    const prodIndexes = userIndexQueryResult.map((item) => item.prodIndex);
    productQueryResult = await pool.query(
      `SELECT * FROM products WHERE prodIndex IN (${prodIndexes.join(',')})`,
    );
    console.log('productQueryResult의 결과값', productQueryResult);
    console.log(
      'productQueryResult의 타입 ----------',
      typeof productQueryResult,
    );

    // todo 3. userIndexQueryResult와 productQueryResult를 join하여 최종 결과물을 완성한다.
    // * 애플리케이션 레벨에서 데이터 핸들링하는 방안1
    // finalResult = userIndexQueryResult.map((userItem) => {
    //   const productItem = productQueryResult.find((prodItem) => prodItem.prodIndex === userItem.prodIndex);
    //   return {
    //     userIndex: userItem.userIndex,
    //     cartIndex: userItem.cartIndex,
    //     cartProductCount: userItem.cartProductCount,
    //     prodIndex: userItem.prodIndex,
    //     prodName: productItem.prodName,
    //     prodPrice: productItem.prodPrice,
    //     prodImgUrl: productItem.prodImgUrl,
    //     prodDescription: productItem.productDescription,
    //     prodStock: productItem.prodStock,
    //     prodCategory: productItem.prodCategory,
    //   };
    // });

    // * 애플리케이션 레벨에서 데이터 핸들링하는 방안2
    const query = `
    SELECT 
      c.cartIndex, 
      c.cartProductCount, 
      c.userIndex, 
      c.prodIndex, 
      p.prodName, 
      p.prodPrice, 
      p.prodImgUrl, 
      p.prodDescription, 
      p.prodStock, 
      p.prodCategory
    FROM 
      cart c
    JOIN 
      products p ON c.prodIndex = p.prodIndex
    WHERE 
      c.userIndex = ?
    `;

    finalResult = await pool.query(query, [Number(userIndex)]);
    console.log('finalResult의 결과값', finalResult);
    console.log('finalResult의 타입 ----------', typeof finalResult);

    res.status(200).json(finalResult);
  } catch (error) {
    // 오류 로깅
    console.error('Error during fetching cartpage:', error);
    res.status(500).json({
      success: false,
      message: '장바구니페이지에 상품데이터를 불러오는데 오류가 있습니다.',
    });
  } finally {
    // realease() 메소드를 호출해야만 pool에 연결된 커넥션이 반환됩니다.
    if (conn) {
      console.log('Releasing database connection');
      conn.release();
    }
  }
});

export default cartpage;
