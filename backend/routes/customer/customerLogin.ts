import express from "express";
import jwt from "jsonwebtoken";
import pool from "../../database";

const customerLogin = express();

customerLogin.post("/login", async (req, res) => {
  let conn;
  // console.log(req.body)
  const { userId, userPassword } = req.body;
  
  try {
    conn = await pool.getConnection();
    const result = await conn.query(
      "SELECT * FROM user WHERE userId = ? AND userPassword = ?",
      [userId, userPassword]
    );

    if (result.length === 0 || result[0].length === 0) {
      res
        .status(401)
        .json({ success: false, message: "사용자가 존재하지 않습니다." });
      return;
    }

    // 비밀번호 확인
    const user = result[0];
    console.log("User data from the server:", user);

    // 비밀번호 비교
    if (user.userPassword && userPassword === user.userPassword.trim()) {
      // 로그인 성공 시 토큰 발급
      const token = jwt.sign(
        { userId: user.userId, userIndex: user.userIndex },
        "1234",
        { expiresIn: "7h" }
      );
      res.status(200).json({ success: true, message: "로그인 성공", token });
    } else {
      res
        .status(401)
        .json({ success: false, message: "비밀번호가 일치하지 않습니다." });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res
      .status(500)
      .json({ success: false, message: "로그인 중 오류가 발생했습니다." });
  } finally {
    if (conn) conn.release();
  }
});

export default customerLogin;
