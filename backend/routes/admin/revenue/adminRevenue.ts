// * ordertable을 클라이언트 측으로 보내주는 로직

import express from "express";
import pool from "../../../database";

export const adminRevenue = express();

adminRevenue.get("/api/adminRevenue", async (req, res) => {
  //* 클라이언트로부터 startDate와 endDate 파라미터를 가져옴
  const { startDate, endDate } = req.query;
  // console.log(startDate)

  try {
    const conn = await pool.getConnection();

    //* startDate와 endDate를 이용하여 해당 기간 동안의 매출 데이터를 조회하는 쿼리 작성
    const query = `
      SELECT 
        orders.orderIndex, 
        orders.orderPaymentCount, 
        orders.orderPaymentDatetime, 
        orders.orderPaymentPriceAtOrder, 
        orders.userIndex, 
        orders.prodIndex, 
        products.prodName
      FROM orders 
      JOIN products ON orders.prodIndex = products.prodIndex
      WHERE orders.orderPaymentDatetime BETWEEN ? AND ?`;

    const revenuedata = await conn.query(query, [startDate, endDate]);
    conn.release();
    console.log(revenuedata)

  } catch (err) {
    res.status(500).send();
  }
});

export default adminRevenue;
