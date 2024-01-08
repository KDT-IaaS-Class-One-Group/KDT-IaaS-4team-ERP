// 예시: 클라이언트 측 (React 컴포넌트)

import React, { useEffect, useState } from 'react';

interface Product {
  product_id: number;
  name: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // 상품 목록을 가져오는 API 호출
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (productId: number) => {
    // 장바구니에 상품 추가 로직을 여기에 추가
    console.log(`상품 ${productId}를 장바구니에 추가했습니다.`);
    // 실제로는 서버로 해당 상품을 추가하는 API 호출 등이 필요합니다.
  };

  return (
    <div>
      <h2>상품 목록</h2>
      <ul>
        {products.map((product) => (
          <li key={product.product_id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product.product_id)}>장바구니에 추가</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;