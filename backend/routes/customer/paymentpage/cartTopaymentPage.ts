//? 두번째 경우) 장바구니 페이지에서 주문하기 클릭 시, 토큰으로 (userIndex)를 식별해서 userIndex가 들어있는 cartIndex를 전부 조회하고 그 cartIndex에서 prodIndex값을 다 추출해서 데이터들을 보내준다?//

import express from "express";
import pool from "../../../database";
import jwt, { JwtPayload } from "jsonwebtoken";

const paymentDataForCart = express();

paymentDataForCart.post("/cart/cartToPayment", async (req, res) => {
  let conn;

  // * 클라이언트 측에서 header로 tokken을 보내준 것을 갖고옴.
  const tokenHeader = req.headers.authorization;
  if (!tokenHeader) {
    return res.status(401).json({ error: "토큰이 제공되지 않았습니다." });
  }

  const token = tokenHeader.split(" ")[1];

  //* 토큰을 검증하여 userIndex 정보를 가져옴
  let userIndex: string | JwtPayload;
  try {
    const decoded: JwtPayload = jwt.verify(token, "1234") as JwtPayload;
    userIndex = decoded.userIndex as string;
    console.log("userIndex : ", userIndex);

    //* userIndex를 사용해서 cartIndex 추출
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
    res.json(productResult);
  } catch (err) {
    return res.status(401).json({ error: "토큰이 유효하지 않습니다." });
  } finally {
    if (conn) conn.release();
  }
});

export default paymentDataForCart;
