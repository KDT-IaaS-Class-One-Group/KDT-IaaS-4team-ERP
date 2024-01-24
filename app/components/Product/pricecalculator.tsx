import React, { useState } from 'react';

interface ProductDatabase {
  [key: string]: number;
}

const ProductPriceCalculator: React.FC = () => {
  const [productName, setProductName] = useState<string>('product1');
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number | string>(0);

  const productDatabase: ProductDatabase = {
    'product1': 50,
    'product2': 100,
    // 다른 상품들...
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);

    if (!isNaN(newQuantity)) {
      setQuantity(newQuantity);
      updateTotalPrice(productName, newQuantity);
    } else {
      // 유효하지 않은 입력일 경우 에러 메시지 출력
      setTotalPrice('유효하지 않은 입력입니다.');
    }
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newProduct = e.target.value;
    setProductName(newProduct);
    updateTotalPrice(newProduct, quantity);
  };

  const updateTotalPrice = (product: string, quantity: number) => {
    const productPrice = productDatabase[product];

    if (!isNaN(quantity) && productPrice !== undefined) {
      // 가격과 수량을 곱하여 새로운 가격을 계산
      const newTotalPrice = productPrice * quantity;
      setTotalPrice(newTotalPrice);
    } else {
      // 상품이 존재하지 않거나 수량이 유효하지 않을 경우 에러 메시지 출력
      setTotalPrice('유효하지 않은 입력입니다.');
    }
  };

  return (
    <div>
      <h1>상품 가격 계산기</h1>

      <label htmlFor="productName">상품 선택:</label>
      <select id="productName" value={productName} onChange={handleProductChange}>
        <option value="product1">상품 1</option>
        <option value="product2">상품 2</option>
      </select>
        {/* 다른 상품들... */}
      <br></br>
      <label htmlFor="quantity">수량:</label>
      <input type="number" id="quantity" value={quantity} min={1} onChange={handleQuantityChange} />

      <p>총 가격: ${totalPrice}</p>
    </div>
  );
};

export default ProductPriceCalculator;