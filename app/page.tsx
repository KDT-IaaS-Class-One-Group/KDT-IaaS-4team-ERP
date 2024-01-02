'use client';

import { useEffect, useState } from 'react';


async function test() {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) throw new Error('데이터 패치를 실패했습니다.');

  return res.json();
}

export default function Home() {
  const [dbStatus, setDbStatus] = useState<string>('');

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setDbStatus(data.message);
        } else if (data.error) {
          setDbStatus(data.error);
        }
      })
      .catch((error) => {
        setDbStatus('API 호출 실패: ' + error.message);
      });
  }, []);

  return (
    <div>
      <p>DB 연결 상태: {dbStatus}</p>
    </div>
  );
}
