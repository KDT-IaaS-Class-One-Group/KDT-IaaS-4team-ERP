import express, { Request, Response } from "express";
import pool from "../../../database";
import jwt, { JwtPayload } from "jsonwebtoken";

const cartpageTest = express();

cartpageTest.get("/cartTest", async (req: Request, res: Response) => {
  let conn;
  // 로그 추가: 토큰 수신 확인
  console.log("Request received with headers:", req.headers);

  const tokenHeader = req.headers.authorization;
  if (!tokenHeader) {
    return res.status(401).json({ error: "토큰이 제공되지 않았습니다." });
  }

  const token = tokenHeader.split(" ")[1];

  // 로그 추가: 토큰 분리 확인
  console.log("Token extracted:", token);

  let userIndex: string | JwtPayload;
  try {
    const decoded = jwt.verify(token, "1234") as JwtPayload;
    userIndex = decoded.userIndex as string;

    // 로그 추가: 토큰 검증 및 userIndex 추출
    console.log("Token verified, userIndex:", userIndex);
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(401).json({ error: "토큰이 유효하지 않습니다." });
  }

  try {
    // 데이터베이스 연결: getConnection() 한 번만 호출
    conn = await pool.getConnection();
    console.log("Database connection established");

    // 로그 추가: SQL 쿼리 실행 확인
    console.log("Executing cart query for userIndex:", userIndex);
    const [cartResult] = await conn.query(
      "SELECT cartIndex FROM cart WHERE userIndex = ?",
      [userIndex]
    );

    interface CartItem {
      cartIndex: number;
      cartProductCount: number;
      userIndex: number;
      prodIndex: number;
    }

    const cartIndexes = cartResult.map((cart: CartItem) => cart.cartIndex);

    console.log("Cart indexes found:", cartIndexes);

    // 로그 추가: products 테이블 조회 로그
    const productQuery = "SELECT * FROM products WHERE cartIndex IN (?)";
    console.log("Executing product query with cartIndexes:", cartIndexes);
    const [productResult] = await conn.query(productQuery, [cartIndexes]);

    const [cartProductCountResult] = await conn.query(
      'SELECT cartProductCount FROM cart WHERE userIndex = ?',
      [userIndex]
    );

    console.log("Sending response with product and cartProductCount data");
    res.json({ productResult, cartProductCountResult });
  } catch (error) {
    console.error("Error during fetching cartpage:", error);
    res.status(500).json({
      success: false,
      message: "장바구니페이지에 상품데이터를 불러오는데 오류가 있습니다.",
    });
  } finally {
    if (conn) {
      console.log("Releasing database connection");
      conn.release();
    }
  }
});

export default cartpageTest;

