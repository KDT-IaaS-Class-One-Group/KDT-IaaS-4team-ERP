import React, { useState } from 'react';

interface productdetails {
  [key: string]: any;
}

const ProductPriceCalculator: React.FC = ({productdetails, setPaymentInfo}) => {

  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number | string>(0);


  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);

    if (!isNaN(newQuantity)) {
      setQuantity(newQuantity);
      updateTotalPrice(newQuantity);
    } 
  };


  const updateTotalPrice = ( quantity: number) => {
    const productPrice = productdetails.prodPrice

    if (!isNaN(quantity) && productPrice !== undefined) {
      // 가격과 수량을 곱하여 새로운 가격을 계산
      const newTotalPrice = productPrice * quantity;
      setTotalPrice(newTotalPrice);


      setPaymentInfo({
        quantity,
        totalPrice: newTotalPrice,
        // 다른 필요한 결제 정보들을 추가할 수 있습니다.
      });
    } 
  };

  return (
    <div>
      <h1>상품 가격 계산기</h1>
      <br></br>
      <label htmlFor="quantity">수량:</label>
      <input type="number" id="quantity" value={quantity} min={1} onChange={handleQuantityChange} />

      <p>총 가격: ${totalPrice}</p>
    </div>
  );
};

export default ProductPriceCalculator;