import React from 'react';
import CartItem from './cartItems';
import { Product } from './types';

type CartPageProps = {
  cartItems: Product[];
};

const CartPage: React.FC<CartPageProps> = ({ cartItems }) => {
  return (
    <div className="cart-page">
      <h2>장바구니</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default CartPage;