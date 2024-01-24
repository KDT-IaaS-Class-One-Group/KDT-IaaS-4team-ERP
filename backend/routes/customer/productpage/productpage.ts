// * 상품페이지에서 필요한 데이터 보내주는 라우팅 모듈
// * 보내주는 데이터: 상품 데이터

import express from "express";
import pool from "../../../database";

const product = express();

// :prodIndex 값으로 동적 라우팅하면 그에 맞는 데이터를 보내줌.
product.get("/product/:prodIndex", async (req, res) => {
  let conn;

  // *동적 라우팅 매개변수로 prodIndex값 가져오기
  const prodIndex = parseInt(req.params.prodIndex, 10);
  console.log("prodIndex : ", prodIndex);

  try {
    conn = await pool.getConnection();

    // MySQL 쿼리 실행
    const [result] = await conn.query('SELECT * FROM products WHERE prodIndex = ?', [prodIndex]);

    if (result.length === 0) {
      // 상품이 없을 경우 404 에러 전송
      res.status(404).json({ error: 'Product not found' });
    } else {
      // 결과를 클라이언트로 전송
      res.json(result); 
      // console.log(result)
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Error fetching product" });
  } finally {
    if (conn) conn.release();
  }
});

export default product;