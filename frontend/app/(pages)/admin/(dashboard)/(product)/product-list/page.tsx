'use client';
import React, { useState, useEffect } from 'react';
import { ProductIdProps } from '@/interfaces/Product/ProductIdProps';
import { ProductNameProps } from '@/interfaces/Product/ProductNameProps';
import { ProductPriceProps } from '@/interfaces/Product/ProductPriceProps';
import { ProductImageLinkProps } from '@/interfaces/Product/ProductImageLinkProps';
import { ProductStockProps } from '@/interfaces/Product/ProductStockProps';

export interface ProductListProps
  extends ProductIdProps,
    ProductNameProps,
    ProductPriceProps,
    ProductImageLinkProps,
    ProductStockProps {}

export default function ProductListPage() {
  return <div>test</div>;
}
