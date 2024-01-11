// * 상품평 페이지에서 상품평 클릭 시, 클라이언트에서 reviewIndex로 동적 라우팅을 하고 그 동적라우팅한 매개변수를 사용해서 review데이터테이블에 조회해 데이터를 보내줌.

import express from "express";
import pool from "../../../database";

const productcommentfull = express();

productcommentfull.get("/productcommentfull/:reviewIndex", async (req, res) => {
  let conn;

  // *동적 라우팅 매개변수로 reviewIndex값 가져오기
  const reviewIndex = parseInt(req.params.reviewIndex, 10);
  console.log(reviewIndex);

  try {
    conn = await pool.getConnection();

    // MySQL 쿼리 실행
    const [result] = await conn.query('SELECT * FROM review WHERE reviewIndex = ?', [reviewIndex]);

    if (result.length === 0) {
      // 리뷰가 없을 경우 404 에러 전송
      res.status(404).json({ error: 'reviewData not found' });
    } else {
      // 결과를 클라이언트로 전송
      res.json(result); // 첫 번째 결과만 전송
      console.log(result)
    }
  } catch (error) {
    console.error("Error fetching reviewData:", error);
    res.status(500).json({ error: "Error fetching reviewData" });
  } finally {
    if (conn) conn.release();
  }
});

export default productcommentfull;
