'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <li>
      <Link href='/api/data'>DB TEST</Link>
    </li>
  );
}
