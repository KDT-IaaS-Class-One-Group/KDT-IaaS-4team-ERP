// * 상품페이지에서 필요한 데이터 보내주는 라우팅 모듈
// * 보내주는 데이터: 상품 데이터

import express from "express";
import pool from "../../../database";
import jwt, { JwtPayload } from "jsonwebtoken";

const buybutton = express();

buybutton.post("/product-buybutton", async (req, res) => {
  let conn;

  const tokenHeader = req.headers.authorization;

  if (!tokenHeader) {
    return res.status(401).json({ error: "토큰이 제공되지 않았습니다." });
  }

  const token = tokenHeader.split(" ")[1];

  jwt.verify(token, "1234", (err, decoded: JwtPayload) => {
    if (err || !decoded) {
      return res.status(401).json({ error: "토큰이 유효하지 않습니다." });
    }

    // 토큰이 유효한 경우 클라이언트에 필요한 정보를 응답
    res.json({
      userID: decoded.userID,
      userIndex: decoded.userIndex, 
    });
  });

  try {
    conn = await pool.getConnection();
    await conn.query(
      "INSERT INTO orders (userIndex, prodIndex, orderDatetime, orderPaymentCount, orderPaymentPriceAtOrder) VALUES (?, ?, ?, ?, ?)",
      []
    );
  } catch {
  } finally {
    if (conn) conn.release();
  }
});
