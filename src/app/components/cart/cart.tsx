import React, { useState } from 'react';
import CartItem from './cartItems';
import { Product } from './types';

type CartPageProps = {
  cartItems: Product[];
};

const CartPage: React.FC<CartPageProps> = ({ cartItems }) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleToggleItem = (itemId: number) => {
    const isSelected = selectedItems.includes(itemId);
    if (isSelected) {
      // 이미 선택된 상품이면 제거
      setSelectedItems((prev) => prev.filter((id) => id !== itemId));
    } else {
      // 선택되지 않은 상품이면 추가
      setSelectedItems((prev) => [...prev, itemId]);
    }
  };

  const cartItemsToDisplay = cartItems.filter((item) =>
    selectedItems.includes(item.id)
  );

  return (
    <div className="cart-page">
      <h2>장바구니</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={selectedItems.includes(item.id)}
            onChange={() => handleToggleItem(item.id)}
          />
          {item.name}
        </div>
      ))}
      <hr />
      {cartItemsToDisplay.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default CartPage;