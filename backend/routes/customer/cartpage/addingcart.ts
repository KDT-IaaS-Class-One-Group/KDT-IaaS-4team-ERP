// * 상품페이지에서 장바구니 버튼 눌렀을 시, 상품데이터를 cart에 집어넣기.

import express from "express";
import pool from "../../../database";
import jwt, { JwtPayload } from "jsonwebtoken";

const addingcart = express();

addingcart.post("/addingcart", async (req, res) => {
  console.log("요청이 옴");
  let conn;

  // * 수량, prodIndex를 body에서 가져오기.
  const { quantity, prodIndex } = req.body;
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

    await conn.query(
      "INSERT INTO cart (userIndex, prodIndex, cartProductCount) VALUES (?, ?, ?)",
      [userIndex, prodIndex, quantity]
    );

    res
      .status(201)
      .json({ success: true, message: "장바구니에 상품이 추가되었습니다." });
  } catch (error) {
    console.error("Error during addingcart:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "장바구니가 상품에 추가되는데 오류가 있습니다.",
      });
  } finally {
    if (conn) conn.release();
  }
});

export default addingcart;
