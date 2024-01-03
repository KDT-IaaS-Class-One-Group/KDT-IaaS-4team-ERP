'use client';

import { useEffect, useState } from 'react';

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
