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
    orders.userIndex, 
    user.userName,
    COUNT(orders.orderIndex) AS orderCount,
    SUM(orders.orderPaymentTotalPrice) AS totalAmount
  FROM orders 
  JOIN user ON orders.userIndex = user.userIndex
  WHERE orders.orderPaymentDatetime BETWEEN ? AND ?
  GROUP BY orders.userIndex
  ORDER BY totalAmount DESC
  LIMIT 4`;

    const topCustomerData = (await conn.query(query, [startDate, endDate]));
    console.log(topCustomerData);

    // 조회된 데이터를 클라이언트에 응답
    res.json({ topCustomerData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default adminTopcustomer;
