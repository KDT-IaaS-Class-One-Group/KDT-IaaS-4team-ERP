'use client';

import React from 'react'
import { usePathname } from 'next/navigation';

export default function ProductDetails() {
  const extractedString = usePathname().split("/").pop();
  return <h1>
    Details about product {extractedString}
  </h1>;
}
