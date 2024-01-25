'use client';

import { useAuth } from '@/app/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminPage() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      alert('로그인을 해주세요');
      router.push('/admin/login');
    }
  }, [isLoggedIn, router]);
  return <div>test</div>;
}
