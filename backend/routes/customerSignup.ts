import express from "express";
import pool from "../database";

const customerSignup = express();

//* 회원가입 엔드포인트
customerSignup.post("/signup", async (req, res) => {
  let conn;
  const { userId, userPassword, userEmail, userPhoneNumber } = req.body;

  try {
    conn = await pool.getConnection();
    await conn.query(
      'INSERT INTO user (userId, userPassword, userEmail, userPhoneNum) VALUES (?, ?, ?, ?, ?)',
      [userId, userPassword, userEmail, userPhoneNumber]
    );

    res.status(201).json({ success: true, message: "회원가입이 완료되었습니다." });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ success: false, message: "회원가입 중 오류가 발생했습니다." });
  } finally {
    if (conn) conn.release();
  }
});

export default customerSignup;
