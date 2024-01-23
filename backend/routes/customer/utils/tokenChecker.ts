import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

/**
 * 토큰을 검증하는 함수입니다.
 * 결과값은 userIndex입니다.
 *
 * @param req Request
 * @param res Response
 * @returns {string} userIndex
 * @returns error
 *
 */
export const tokenChecker = (req: Request, res: Response) => {
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
    return userIndex;
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(401).json({ error: "토큰이 유효하지 않습니다." });
  }
};
