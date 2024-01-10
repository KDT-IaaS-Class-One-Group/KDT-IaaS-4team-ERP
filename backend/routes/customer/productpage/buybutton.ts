// * 상품페이지에서 구매 버튼 클릭시 받아야되는 데이터
// * 입력받는 데이터: userIndex, prodIndex, quantity

import express from "express";
import pool from "../../../database";
import jwt, { JwtPayload } from "jsonwebtoken";

const buybutton = express();

buybutton.post("/product/buy", async (req, res) => {
  let conn;

  //* prodIndex, 수량
  const { prodIndex, quantity } = req.body;
  
  //* 현재 시간 생성
  const orderDate = new Date();

  // 클라이언트에서 보낸 토큰을 검증하고 데이터 뽑기(userId, userIndex)
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
  } catch (err) {
    return res.status(401).json({ error: "토큰이 유효하지 않습니다." });
  }

  try {
    conn = await pool.getConnection();

    const orderPaymentPriceAtOrder = await conn.query("SELECT orderPaymentPriceAtOrder from products WHERE prodIndex=?", [prodIndex])*quantity


    // 여기에서 userIndex를 사용하여 데이터베이스에 쓰는 로직을 작성
    await conn.query(
      "INSERT INTO orders (userIndex, prodIndex, orderDatetime, orderPaymentCount, orderPaymentPriceAtOrder) VALUES (?, ?, ?, ?, ?)",
      [userIndex, prodIndex, orderDate, quantity, orderPaymentPriceAtOrder]
    );

    res.json({
      success: true,
      message: "주문이 완료되었습니다.(주문데이터가 데이터베이스에 저장됨)",
    });
  } catch (error) {
    console.error("Error during order creation:", error);
    res
      .status(500)
      .json({ success: false, message: "주문 생성 중 오류가 발생했습니다." });
  } finally {
    if (conn) conn.release();
  }
});

export default buybutton