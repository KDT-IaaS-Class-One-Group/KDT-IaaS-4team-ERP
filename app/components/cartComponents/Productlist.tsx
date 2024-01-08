import React, { useEffect, useState } from "react";

interface Product {
  product_id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartItem {
  productId: number;
  quantity: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useEffect(() => {
    // 상품 목록을 가져오는 API 호출
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (productId: number, quantity: number) => {
    try {
      // 장바구니에 해당 상품이 이미 있는지 확인
      const checkResponse = await fetch("/api/is-in-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 토큰 데이터 추가
        },
        body: JSON.stringify({ productId, token }),
      });

      const checkData = await checkResponse.json();

      if (checkData.isInCart) {
        // 이미 장바구니에 있는 경우 수량 업데이트
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.productId === productId ? { ...item, quantity } : item
          )
        );
      } else {
        // 없는 경우 새로 추가
        setCart((prevCart) => [...prevCart, { productId, quantity }]);

        // 서버로 데이터 전송
        const response = await fetch("/api/add-to-cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // 토큰 데이터 추가
          },
          body: JSON.stringify({ productId, quantity, token }),
        });

        if (!response.ok) {
          console.error("Error adding to cart:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div>
      <h2>상품 목록</h2>
      <ul>
        {products.map((product) => (
          <li key={product.product_id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product.product_id, 1)}>
              장바구니에 추가
            </button>
            {/* 수량 조절 UI */}
            <div>
              <button
                onClick={() =>
                  addToCart(
                    product.product_id,
                    Math.max(1, product.quantity - 1)
                  )
                }
              >
                -
              </button>
              <span>
                수량:{" "}
                {cart.find((item) => item.productId === product.product_id)
                  ?.quantity || 0}
              </span>
              <button
                onClick={() =>
                  addToCart(
                    product.product_id,
                    (cart.find((item) => item.productId === product.product_id)
                      ?.quantity || 0) + 1
                  )
                }
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
