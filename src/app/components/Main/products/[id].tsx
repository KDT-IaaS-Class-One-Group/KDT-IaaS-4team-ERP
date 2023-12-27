import { useRouter } from 'next/router';
import React from 'react';
import { Product } from '../../../types/Product';
import styles from './ProductDetail.module.css';

const ProductDetail: React.FC = () => {
  // 더미 데이터, 실제로는 API로부터 데이터를 가져올 수 있습니다.
  const product: Product = {
    id: 1,
    title: '상품 제목',
    price: 10000,
    description: '상품 설명',
    imageUrl: '상품 이미지 URL',
  };

  return (
    <div className={styles.productDetail}>
      <img
        src={product.imageUrl}
        alt={product.title}
        className={styles.productImage}
      />
      <h1>{product.title}</h1>
      <p className={styles.price}>{`₩${product.price}`}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
