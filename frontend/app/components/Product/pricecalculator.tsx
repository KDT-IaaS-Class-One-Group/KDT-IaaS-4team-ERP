import React, { useState, useEffect } from "react";

interface ProductDetails {
  [key: string]: any;
}

interface ProductPriceCalculatorProps {
  productdetails: ProductDetails;
  setPaymentInfo: (info: any) => void;
}

const ProductPriceCalculator: React.FC<ProductPriceCalculatorProps> = ({
  productdetails,
  setPaymentInfo,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number | string>(0);

  useEffect(() => {
    // 초기 렌더링 시 productdetails.prodPrice로 totalPrice 초기화
    setTotalPrice(productdetails.prodPrice);
  }, [productdetails.prodPrice]); // productdetails.prodPrice가 업데이트될 때만 실행

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);

    if (!isNaN(newQuantity)) {
      setQuantity(newQuantity);
      updateTotalPrice(newQuantity);
    }
  };

  const updateTotalPrice = (quantity: number) => {
    const productPrice = productdetails.prodPrice;

    if (!isNaN(quantity) && productPrice !== undefined) {
      // 가격과 수량을 곱하여 새로운 가격을 계산
      const newTotalPrice = productPrice * quantity;
      setTotalPrice(newTotalPrice);

      setPaymentInfo({
        quantity: quantity,
        totalPrice: newTotalPrice,
        // 다른 필요한 결제 정보들을 추가할 수 있습니다.
      });
    }
  };

  return (
    <div>
      <br></br>
      <label htmlFor="quantity">수량(개): </label>
      <input
        inputMode="numeric"
        className="ml-2 w-20 text-left"
        type="number"
        id="quantity"
        value={quantity}
        min={1}
        onChange={handleQuantityChange}
      />

      <p>총 가격 : {totalPrice}원</p>
    </div>
  );
};

export default ProductPriceCalculator;
