// * ordertable을 클라이언트 측으로 보내주는 로직

import express from "express";
import pool from "../../../database";

export const adminRevenue = express();


// Mock 데이터베이스에서 매출 데이터 가져오기 (이 부분은 실제 데이터베이스와 연동되어야 합니다.)
const getRevenueData = (startDate: string, endDate: string) => {
  // 여기서는 임의로 매출 데이터를 반환합니다.
  // 실제로는 데이터베이스 쿼리 등을 사용하여 데이터를 가져와야 합니다.
  // 예시로 임의의 수익값을 반환합니다.
  return Math.floor(Math.random() * 100000);
};

adminRevenue.get("/api/adminRevenue", (req, res) => {
  // 클라이언트로부터 startDate와 endDate 파라미터를 가져옴
  const { startDate, endDate } = req.query;

  // startDate와 endDate가 주어지지 않으면 오류 응답
  if (!startDate || !endDate) {
    return res.status(400).json({ error: "날짜 범위가 유효하지 않습니다." });
  }

  // 매출 데이터를 가져와 응답
  const revenue = getRevenueData(startDate as string, endDate as string);
  res.json({ revenue });
});
