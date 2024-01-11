//* 토큰의 userindex정보로 데이터 테이블 'cart'를 조회해서 prodIndex, cartProductCount를 추출한뒤, prodIndex를 이용해서 'product'에 대한 정보와 cartProductCount도 클라이언트로 보내줌.

import express from "express";
import pool from "../../../database";
import jwt, { JwtPayload } from "jsonwebtoken";

const cartpage = express();

cartpage.get("/cart", async (req, res) => {
  let conn;

  // * 클라이언트 측에서 header로 tokken을 보내준 것을 갖고옴.
  const tokenHeader = req.headers.authorization;
  if (!tokenHeader) {
    return res.status(401).json({ error: "토큰이 제공되지 않았습니다." });
  }

  const token = tokenHeader.split(" ")[1];

  //* 토큰을 검증하여 userIndex 정보를 가져옴.
  let userIndex: string | JwtPayload;
  try {
    const decoded: JwtPayload = jwt.verify(token, "1234") as JwtPayload;
    userIndex = decoded.userIndex as string;
  } catch (err) {
    return res.status(401).json({ error: "토큰이 유효하지 않습니다." });
  }

  try {
    conn = await pool.getConnection();

    //* userIndex를 사용해서 cartIndex 추출 후 product테이블의 정보가져오기
    conn = await pool.getConnection();
    const cartResult = await conn.query(
      "SELECT cartIndex FROM cart WHERE userIndex = ?",
      [userIndex]
    );

    // cartIndexes 배열 추출
    const cartIndexes: number[] = cartResult.map(
      (cart: { cartIndex: number }) => cart.cartIndex
    );

    // cartIndexes를 사용하여 products 테이블에서 해당하는 레코드 조회
    const productQuery = "SELECT * FROM products WHERE cartIndex IN (?)";
    const [productResult] = await conn.query(productQuery, [cartIndexes]);

    // * userIndex를 사용해서 cart테이블의 cartProductCount를 가져오기
    const cartProductCountResult = await conn.query('SELECT cartProductCount FROM cart WHERE userIndex = ?',[userIndex])
    
    // * 객체로 묶어서 상품데이터, 상품개수 값을 보내줌.
    res.json({productResult, cartProductCountResult});

  } catch (error) {
    console.error("Error during fetching cartpage:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "장바구니페이지에 상품데이터를 불러오는데 오류가 있습니다.",
      });
  } finally {
    if (conn) conn.release();
  }
});
