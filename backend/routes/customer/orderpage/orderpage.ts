// * 주문조회 페이지 userIndex를 이용해서 'order' 테이블을 조회하고 order데이터를 보내줌.

import express from "express";
import pool from "../../../database";
import jwt, { JwtPayload } from "jsonwebtoken";

const orderpage = express();

orderpage.get("/orderpage/getdata", async (req, res) => {
  let conn;

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

    const orderResult = await conn.query(
      "SELECT orders.orderIndex, orders.orderPaymentCount, orders.orderDeliveryDone, orders.orderPaymentDatetime, products.prodIndex, products.prodPrice, products.prodImgUrl, products.prodDescription FROM orders JOIN products ON orders.prodIndex = products.prodIndex WHERE orders.userIndex = ?",
      [userIndex]
    );
    if (orderResult.length === 0) {
      // 상품이 없을 경우 404 에러 전송
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(201).json(orderResult);
      console.log(orderResult);
    }
  } catch (error) {
    console.error("Error fetching orderData:", error);
    res.status(500).json({ error: "Error fetching orderData" });
  } finally {
    if (conn) conn.release();
  }
});

export default orderpage;
