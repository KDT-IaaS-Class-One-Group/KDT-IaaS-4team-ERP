// * 상품 리뷰등록 페이지에서 사용자가 작성한 내용, 사용자 토큰으로 userIndex를 데이터 테이블 'reviews'에 넣어주기

import express from "express";
import pool from "../../../database";
import jwt, { JwtPayload } from "jsonwebtoken";

const productcommentwrite = express();

productcommentwrite.post("/:prodIndex/reviews", async (req, res) => {
  let conn;
  // const prodIndex = req.params.prodIndex;
  // * 클라이언트 측에서 header로 tokken을 보내준 것을 갖고옴.
  const tokenHeader = req.headers.authorization;
  if (!tokenHeader) {
    return res.status(401).json({ error: "토큰이 제공되지 않았습니다." });
  }

  const token = tokenHeader.split(" ")[1];

  //* 토큰을 검증하여 userIndex 정보를 가져옴.
  let userId: string | JwtPayload;
  try {
    const decoded: JwtPayload = jwt.verify(token, "1234") as JwtPayload;
    console.log(decoded)
    userId = decoded.userId as string;
    console.log(userId)
  } catch (err) {
    return res.status(401).json({ error: "토큰이 유효하지 않습니다." });
  }

  // * 상품이 무엇인지, 상품평 제목, 상품별점, 상품평 내용, 상품평 이미지url
  const {
    reviewTitle,
    reviewRating,
    reviewContent,
    prodIndex,
  } = req.body;
  console.log(reviewRating)
  console.log(userId)



  // // * WhichProduct = prodName임. 쿼리문으로 prodIndex를 찾아서 review테이블에 넣어줌.
  // try {
  //   conn = await pool.getConnection();
  //   prodIndex ?= await conn.query(
  //     "SELECT prodIndex FROM reviews WHERE prodName = ?",
  //     [WhichProduct]
  //   );
  //   res.status(200).json(prodIndex);
  // } catch (error) {
  //   console.error("Error cannot Found prodIndex:", error);
  //   res.status(500).json({ error: "Error cannot Found prodIndex" });
  // } finally {
  //   if (conn) conn.release();
  // }

  // * 리뷰등록 시간
  const reviewCreateDate = new Date();

  // * review테이블에 데이터를 넣어주는 쿼리문.
  try {
    conn = await pool.getConnection();
    await conn.query(
      "INSERT INTO reviews (userId, prodIndex, reviewTitle, reviewRating, reviewContent, reviewCreatedAt) VALUES (?, ?, ?, ?, ?, ?)",
      [userId, prodIndex, reviewTitle, reviewRating, reviewContent, reviewCreateDate]
    );
    res
      .status(201)
      .json({ success: true, message: "리뷰등록이 완료되었습니다." });
  } catch (error) {
    console.error("Error during reviewWrite:", error);
    res
      .status(500)
      .json({ success: false, message: "리뷰등록이 실패했습니다." });
  } finally {
    if (conn) conn.release();
  }
});

export default productcommentwrite;
