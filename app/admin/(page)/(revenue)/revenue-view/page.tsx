// 매출 통계 페이지

import React from 'react';

type SaleData = {
  month: string;
  sales: number;
};

const salesData: SaleData[] = [
  { month: '1월', sales: 200 },
  { month: '2월', sales: 400 },
  { month: '3월', sales: 150 },
];

const getMaxSales = (data: SaleData[]) => {
  return Math.max(...data.map((d) => d.sales));
};

const SalesStats: React.FC = () => {
  const maxSales = getMaxSales(salesData);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-xl font-semibold mb-4'>매출 통계</h1>
      <div className='flex flex-col space-y-4'>
        {salesData.map((data) => (
          <div key={data.month} className='flex items-center'>
            <span className='w-16'>{data.month}</span>
            <div className='w-full bg-gray-200 rounded h-8'>
              <div
                className='bg-blue-600 h-8 rounded'
                style={{ width: `${(data.sales / maxSales) * 100}%` }}
              />
            </div>
            <span className='w-16 ml-2'>{data.sales.toLocaleString()}원</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesStats;
