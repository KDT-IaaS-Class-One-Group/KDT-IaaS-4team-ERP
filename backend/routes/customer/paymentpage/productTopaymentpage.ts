// * 메인페이지에서 필요한 데이터 보내주는 라우팅 모듈
// * 구매페이지 두 가지 경우를 나눔.
// * 첫번째 경우) 상품페이지에서 단독으로 상품을 클릭했을 시, 상품(prodIndex만으로 상품 데이터를 보내줌.)


import express from "express";
import pool from "../../../database";
import jwt, { JwtPayload } from "jsonwebtoken";

const paymentDataForProductPage = express();


//* 상품 상세페이지에서 구매버튼을 눌렀을 때 구매페이지.
paymentDataForProductPage.get("/product/:prodIndex/payment", async (req, res) => {
  let conn;
  const prodIndex = req.params.prodIndex;

  try {
    conn = await pool.getConnection();
    const result = await conn.query(
      "SELECT * FROM products WHERE prodIndex = ?",
      [prodIndex]
    );

    res.json(result);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Error fetching product" });
  } finally {
    if (conn) conn.release();
  }
});

export default paymentDataForProductPage