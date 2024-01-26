// * 메인페이지에서 필요한 데이터 보내주는 라우팅 모듈
// * 보내주는 데이터: 상품 데이터

import express from "express";
import pool from "../../database";

const mainPage = express();

mainPage.get("/", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query(
      "SELECT * FROM products WHERE prodStatus =1"
    );
    // console.log(result)
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Error fetching products" });
  } finally {  
    if (conn) conn.release();
  }
});

export default mainPage;
