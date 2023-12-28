'use client'

import { useEffect, useState } from 'react';

const PaymentPage = () => {
  const [jsonData, setJsonData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/payment/data');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error during API fetch:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Payment Page</h1>
      {jsonData && (
        <div>
          <h2>JSON Data:</h2>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;