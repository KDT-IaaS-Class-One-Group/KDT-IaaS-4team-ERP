import React from 'react';
import { Product } from './types';

type CartItemProps = {
  product: Product;
};

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>가격: {product.price}</p>
      </div>
    </div>
  );
};

export default CartItem;