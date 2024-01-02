'use client';

// pages/index.tsx 또는 다른 클라이언트 측 코드
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [dbStatus, setDbStatus] = useState('');

  useEffect(() => {
    async function fetchDbStatus() {
      try {
        const response = await fetch('/api/data'); // data.ts에서 설정한 API 경로
        const data = await response.json();
        if (response.ok) {
          setDbStatus('연결 성공');
        } else {
          setDbStatus(`연결 실패: ${data.error}`);
        }
      } catch (error) {
        setDbStatus('연결 실패: 서버에 요청할 수 없음');
      }
    }

    fetchDbStatus();
  }, []);

  return <div>데이터베이스 상태: {dbStatus}</div>;
}
