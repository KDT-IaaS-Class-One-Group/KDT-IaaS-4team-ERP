import express, { Request, Response } from "express";
import pool from "../../../database";

export const adminTopcustomer = express();

interface Order {
  orderIndex: number;
  orderPaymentCount: number;
  orderPaymentDatetime: string;
  orderPaymentTotalPrice: number;
  userIndex: number;
  prodIndex: number;
  prodName: string;
}

adminTopcustomer.get("/api/adminTopCustomer", async (req, res) => {
  const { startDate, endDate } = req.query;
  console.log(req.query);

  try {
    const conn = await pool.getConnection();

    // 해당 기간 동안의 주문 데이터 가져오기
    const query = `
  SELECT 
    u.userName,
    o.userIndex, 
    COUNT(o.orderIndex) AS orderCount,
    SUM(o.orderPaymentTotalPrice) AS totalAmount
  FROM orders o
  JOIN user u ON o.userIndex = u.userIndex
  WHERE o.orderPaymentDatetime BETWEEN ? AND ?
  GROUP BY o.userIndex
  ORDER BY totalAmount DESC
  LIMIT 1
`;

    const topCustomerData = (await conn.query(query, [startDate, endDate]))[0];
    console.log(topCustomerData);

    // 조회된 데이터를 클라이언트에 응답
    res.json({ topCustomerData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default adminTopcustomer;
