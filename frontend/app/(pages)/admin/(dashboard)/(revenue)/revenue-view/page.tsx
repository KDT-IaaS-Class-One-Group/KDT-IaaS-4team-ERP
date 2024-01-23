'use client'

import React, { useState } from "react";

export default function RevenueView() {
  // 날짜 상태
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState(""); // 추가: 카테고리 상태

  const [revenue, setRevenue] = useState<number | null>(null);

  // 날짜 변경 핸들러
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "startDate") {
      setStartDate(value);
    } else if (name === "endDate") {
      setEndDate(value);
    }
  };

  // 카테고리 변경 핸들러
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  // 수익 계산 함수
  const calculateRevenue = async () => {
    try {
      // 서버로부터 데이터를 가져오는 fetch 요청
      const response = await fetch(
        `http://localhost:3560/api/adminRevenue?startDate=${startDate}&endDate=${endDate}&category=${category}`
      );

      if (!response.ok) {
        throw new Error(
          `서버에서 데이터를 가져오지 못했습니다. 상태 코드: ${response.status}`
        );
      }

      // 서버에서 받은 데이터를 JSON으로 파싱
      const data = await response.json();

      // 수익 설정
      setRevenue(data.totalSales);
    } catch (error) {
      console.error("서버와의 통신 중 오류 발생:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl font-semibold mb-6">매출 조회</h1>
        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            시작 날짜:
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={handleDateChange}
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="endDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            끝 날짜:
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={handleDateChange}
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* 추가: 카테고리 선택 */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            카테고리:
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleCategoryChange}
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">전체</option>
            <option value="Zerg">Zerg</option>
            <option value="Terran">Terran</option>
            <option value="Protoss">Protoss</option>
          </select>
        </div>
        <div className="mb-4">
          <button
            onClick={calculateRevenue}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            수익 계산
          </button>
        </div>
        {revenue !== null && (
          <p className="text-green-500">
            선택한 기간 동안의 수익: {revenue.toLocaleString()}원
          </p>
        )}
      </div>
    </div>
  );
}
