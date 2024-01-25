'use client';
import Image from 'next/image';
export default function AdminPage() {
  return (
    <>
      <Image
        width={700}
        height={700}
        src={'/images/starcraft.png'}
        alt={'스타크래프트'}
      />
    </>
  );
}
