'use client';
import Image from 'next/image';
export default function AdminPage() {
  return (
    <>
      <Image
        width={1300}
        height={900}
        src={'/images/starcraftwall.jpg'}
        alt={'스타크래프트'}
      />
    </>
  );
}
