// * 상품페이지에서 필요한 데이터 보내주는 라우팅 모듈
// * 보내주는 데이터: 상품 데이터

import express from "express";
import pool from "../../../database";

const buybutton = express();

buybutton.post("/product", async (req, res) => {
  let conn;

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
