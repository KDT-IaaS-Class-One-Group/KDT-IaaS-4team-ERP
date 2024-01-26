"use client";

import React, { useState, ChangeEvent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Customer {
  userName: string;
  userIndex: number;
  orderCount: number;
  totalAmount: number;
}

interface Product {
  prodIndex: number;
  prodCategory: string;
  prodName: string;
  orderCount: number;
  totalAmount: number;
}

export default function RevenueView() {
  // * 상태들
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [topCustomers, setTopCustomer] = useState<Customer[] | null>(null);
  const [topProducts, setTopProduct] = useState<Product[] | null>(null);
  const [revenue, setRevenue] = useState<number | null>(null);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "startDate") {
      setStartDate(value);
    } else if (name === "endDate") {
      setEndDate(value);
    }
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  // 수익 계산 함수
  const calculateRevenue = async () => {
    try {
      if (!startDate || !endDate) {
        alert("날짜를 선택하세요.");
        return;
      }
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

  // 최고의 고객 조회 함수
  const fetchTopCustomers = async () => {
    try {
      if (!startDate || !endDate) {
        alert("날짜를 선택하세요.");
        return;
      }
      // 서버로부터 데이터를 가져오는 fetch 요청
      const response = await fetch(
        `http://localhost:3560/api/adminTopCustomer?startDate=${startDate}&endDate=${endDate}`
      );

      if (!response.ok) {
        throw new Error(
          `서버에서 데이터를 가져오지 못했습니다. 상태 코드: ${response.status}`
        );
      }

      // 서버에서 받은 데이터를 JSON으로 파싱
      const data = await response.json();

      // 최고의 고객 설정
      setTopCustomer(data.topCustomerData);
    } catch (error) {
      console.error("서버와의 통신 중 오류 발생:", error);
    }
  };

  // Top 상품 조회 함수
  const fetchTopProducts = async () => {
    try {
      if (!startDate || !endDate) {
        alert("날짜를 선택하세요.");
        return;
      }
      // 서버로부터 데이터를 가져오는 fetch 요청
      const response = await fetch(
        `http://localhost:3560/api/adminTopProduct?startDate=${startDate}&endDate=${endDate}`
      );

      if (!response.ok) {
        throw new Error(
          `서버에서 데이터를 가져오지 못했습니다. 상태 코드: ${response.status}`
        );
      }

      // 서버에서 받은 데이터를 JSON으로 파싱
      const data = await response.json();

      // Top 상품 상태 설정
      setTopProduct(data.topProductData);
    } catch (error) {
      console.error("서버와의 통신 중 오류 발생:", error);
    }
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className='container mx-auto p-4 h-full overflow-y-auto'>
      <div className='shadow-md rounded px-8 pt-6 pb-8 mb-4 '>
        {/* 날짜 선택 */}
        <h1 className='text-xl font-semibold mb-6'>매출 조회</h1>
        <div className="daySelectors flex justify-start items-center gap-12">
          <div className='mb-4'>
            <label
              htmlFor='startDate'
              className='block text-sm font-bold mb-2'
            >
              시작 날짜:
            </label>
            <input
              type='date'
              id='startDate'
              name='startDate'
              value={startDate}
              onChange={handleDateChange}
              className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='endDate'
              className='block  text-sm font-bold mb-2'
            >
              끝 날짜:
            </label>
            <input
              type='date'
              id='endDate'
              name='endDate'
              value={endDate}
              onChange={handleDateChange}
              className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
        </div>

        {/* 카테고리 선택 */}
        <div className='mb-4'>
          <label
            htmlFor='category'
            className='block  text-sm font-bold mb-2'
          >
            카테고리:
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleCategoryChange}
            className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          >
            <option value="">전체</option>
            <option value="Zerg">Zerg</option>
            <option value="Terran">Terran</option>
            <option value="Protoss">Protoss</option>
          </select>
        </div>
        <div className="liner w-full h-1 border-b border-slate-700 mt-12"></div>
        <div className="buttonOutterDiv mt-16 flex justify-start items-center w-full gap-4">
          <button
            onClick={calculateRevenue}
            className='adminBtnStyle border border-slate-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            수익 계산
          </button>
        </div>
        {revenue !== null && (
          <BarChart
            width={600}
            height={300}
            data={[{ name: '총 매출', amount: revenue }]}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='amount' fill='#8884d8' />
          </BarChart>
        )}
      </div>

      {/* 상위고객, 상위 상품 조회 */}
      <div className='container mx-auto'>
        <div className='shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <button
              onClick={fetchTopCustomers}
              className='adminBtnStyle border border-slate-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              상위 고객 조회
            </button>
          </div>
          {topCustomers !== null && (
            <div>
              <p className="text-green-500">상위 고객 순위:</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topCustomers}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="userName" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="orderCount"
                    fill="#8884d8"
                    name="주문 횟수"
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="totalAmount"
                    fill="#82ca9d"
                    name="총 구매액"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>

      <div className='container mx-auto'>
        <div className='shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <button
              onClick={fetchTopProducts}
              className='adminBtnStyle border border-slate-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Top 상품 조회
            </button>
          </div>
          {topProducts !== null && (
            <div>
              <p className="text-green-500">Top 상품 정보:</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topProducts}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="prodName" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="orderCount"
                    fill="#8884d8"
                    name="주문 횟수"
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="totalAmount"
                    fill="#82ca9d"
                    name="총 판매액"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
