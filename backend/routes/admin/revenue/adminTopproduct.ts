import express, { Request, Response } from "express";
import pool from "../../../database";

export const adminTopProduct = express();

interface ProductSales {
  prodIndex: number;
  prodName: string;
  orderCount: number;
  totalAmount: number;
}

adminTopProduct.get("/api/adminTopProduct", async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const conn = await pool.getConnection();

    // 해당 기간 동안의 상품 판매량 데이터 가져오기
    const query = `
      SELECT 
        products.prodIndex,
        products.prodName,
        products.prodCategory,
        COUNT(orders.orderIndex) AS orderCount,
        SUM(orders.orderPaymentTotalPrice) AS totalAmount
      FROM orders 
      JOIN products ON orders.prodIndex = products.prodIndex
      WHERE orders.orderPaymentDatetime BETWEEN ? AND ?
      GROUP BY products.prodIndex
      ORDER BY orderCount DESC
      LIMIT 4;
    `;

    const topProductData = (await conn.query(query, [startDate, endDate]));
    console.log(topProductData)

    // 조회된 데이터를 클라이언트에 응답
    res.json({ topProductData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default adminTopProduct