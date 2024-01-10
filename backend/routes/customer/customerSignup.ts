import express from "express";
import pool from "../../database";

const customerSignup = express();

//* 회원가입 엔드포인트
customerSignup.post("/signup", async (req, res) => {
  let conn;
  const { userId, userPassword, userPassword1, userEmail, userPhoneNum } =
    req.body;

  // userPassword와 userPassword1이 다를 경우 예외 처리
  if (userPassword !== userPassword1) {
    return res
      .status(400)
      .json({ success: false, message: "비밀번호가 일치하지 않습니다." });
  }

  try {
    conn = await pool.getConnection();
    await conn.query(
      "INSERT INTO user (userId, userPassword, userEmail, userPhoneNum) VALUES (?, ?, ?, ?)",
      [userId, userPassword, userEmail, userPhoneNum]
    );

    res
      .status(201)
      .json({ success: true, message: "회원가입이 완료되었습니다." });
  } catch (error) {
    console.error("Error during signup:", error);
    res
      .status(500)
      .json({ success: false, message: "회원가입 중 오류가 발생했습니다." });
  } finally {
    if (conn) conn.release();
  }
});

export default customerSignup;
