import React, { useState, useEffect } from 'react';

export default function ProductForm ({ onSubmit, initialData }) {
  const [prodName, setProdName] = useState('');
  const [prodDescription, setProdDescription] = useState('');
  const [prodCategory, setProdCategory] = useState('');
  const [prodImgUrl, setProdImgUrl] = useState('');
  const [prodPrice, setProdPrice] = useState('');
  const [prodStock, setProdStock] = useState('');

  useEffect(() => {
    if (initialData) {
      setProdName(initialData.prodName || '');
      setProdDescription(initialData.prodDescription || '');
      setProdCategory(initialData.prodCategory || '');
      setProdImgUrl(initialData.prodImgUrl || '');
      setProdPrice(initialData.prodPrice || '');
      setProdStock(initialData.prodStock || '');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      prodName,
      prodDescription,
      prodCategory,
      prodImgUrl,
      prodPrice,
      prodStock,
    });
  };

  // 폼 레이아웃 구현
  return (
    <form onSubmit={handleSubmit}>
      {/* 폼 필드들 (prodName, prodDescription 등) */}
      {/* 예: */}
      <input
        type="text"
        value={prodName}
        onChange={(e) => setProdName(e.target.value)}
        // ... 나머지 속성
      />
      {/* 나머지 입력 필드들 */}
      <button type="submit">저장</button>
    </form>
  );
};