import express, { Request, Response } from "express";
import pool from "../../../database";
import jwt, { JwtPayload } from "jsonwebtoken";

const cartTest = express();

// token을 조회하는 함수 (토큰이 없을 경우 에러를 반환한다.)
const tokenChecker = (req: Request, res: Response) => {};

cartTest.post("/cart/cartToPayment", async (req: Request, res: Response) => {
  let conn;

  const tokenHeader = req.headers.authorization;
  if (!tokenHeader) {
    return res.status(401).json({ error: "토큰이 제공되지 않았습니다." });
  }
  const token = tokenHeader.split(" ")[1];
  let userIndex: string | JwtPayload;
  try {
    // 디코딩된 데이터를 나타내는 변수입니다.
    const decoded = jwt.verify(token, "1234") as JwtPayload;
    userIndex = decoded.userIndex as string;
    // 로그 추가: 토큰 검증 및 userIndex 추출
    console.log("Token verified, userIndex:", userIndex);
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(401).json({ error: "토큰이 유효하지 않습니다." });
  }

  // ! 위의 과정으로 로컬스토리지에서 토큰을 분해하여 userIndex를 추출하였습니다.

  try {
    res.status(200).json();
  } catch (error) {
    // 오류 로깅
    console.error("Error during fetching cartTest:", error);
    res.status(500).json({
      success: false,
      message: "cartTest 오류",
    });
  } finally {
    if (conn) {
      console.log("Releasing database connection");
      // conn.release();
    }
  }
});

export default cartTest;
