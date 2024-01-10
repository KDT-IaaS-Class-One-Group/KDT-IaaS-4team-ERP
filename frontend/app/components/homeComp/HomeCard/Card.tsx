// 'use client'

import React from "react";
import { Link } from "react-router-dom";

interface Product {
  prodIndex: number;
  prodImgUrl: string;
  prodName: string;
  prodDescription: string;
  prodPrice: number;
}

/**
 *
 * @param prodIndex 상품인덱스(primary key)
 * @param prodImgUrl 상품 이미지 url : string
 * @param prodName 상품명 : string
 * @param prodDescription 상품 설명 : string
 * @param prodPrice 상품 가격 : number
 * @returns
 */

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.prodIndex}>
            <Link to={`/product/${product.prodIndex}`}>
              <img src={product.prodImgUrl} alt={product.prodName} />
              <div>
                <h2>{product.prodName}</h2>
                <p>{product.prodDescription}</p>
                <p>Price: {product.prodPrice}원</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
