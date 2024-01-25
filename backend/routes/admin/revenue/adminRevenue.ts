import express, { Request, Response } from "express";
import pool from "../../../database";

export const adminRevenue = express();

interface Order {
  orderIndex: number;
  orderPaymentCount: number;
  orderPaymentDatetime: string;
  orderPaymentTotalPrice: number;
  userIndex: number;
  prodIndex: number;
  prodName: string;
}

adminRevenue.get("/api/adminRevenue", async (req: Request, res: Response) => {
  // 클라이언트로부터 startDate, endDate, category 파라미터를 가져옴
  const { startDate, endDate, category } = req.query;
  console.log(req.query);

  try {
    const conn = await pool.getConnection();

    // startDate와 endDate, category를 이용하여 해당 기간 동안의 매출 데이터를 조회하는 쿼리 작성
    let query = `
      SELECT 
        orders.orderIndex, 
        orders.orderPaymentCount, 
        orders.orderPaymentDatetime, 
        orders.orderPaymentTotalPrice, 
        orders.userIndex, 
        orders.prodIndex, 
        products.prodName,
        products.prodCategory
      FROM orders 
      JOIN products ON orders.prodIndex = products.prodIndex
      WHERE orders.orderPaymentDatetime BETWEEN ? AND ?`;

    // category가 전달된 경우에만 해당 카테고리의 상품 조회
    if (category) {
      query += ` AND products.prodCategory = ?`;
    }

    const queryParams = [startDate, endDate];
    
    // category가 전달된 경우에만 쿼리 파라미터에 추가
    if (category) {
      queryParams.push(category);
    }

    const revenuedata: Order[] = (await conn.query(query, queryParams)) as Order[];
    console.log(revenuedata);

    // 총 판매량 계산
    const totalSales = revenuedata.reduce((acc, order) => {
      const totalPrice = order.orderPaymentTotalPrice;

      if (!isNaN(totalPrice)) {
        return acc + totalPrice;
      }

      return acc;
    }, 0);

    conn.release();

    // 조회된 매출 데이터와 총 판매량을 클라이언트에 응답
    res.json({ revenuedata, totalSales });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default adminRevenue;