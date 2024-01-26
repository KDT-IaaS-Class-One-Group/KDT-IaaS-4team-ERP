"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ProductsTableProps } from "@/app/types/Product/ProductsTableProps";

// 상품 목록을 가져오는 함수 (API 호출)
const fetchProducts = async (): Promise<ProductsTableProps[]> => {
  try {
    const response = await fetch("http://localhost:3560/api/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default function ProductListPage() {
  const [products, setProducts] = useState<ProductsTableProps[]>([]);
  const router = useRouter(); // Next.js의 라우터 사용

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const fetchedProducts = await fetchProducts();
      // prodStatus가 1인, 즉 활성화된 상품들만 필터링하여 상태에 저장
      const activeProducts = fetchedProducts.filter(
        (product) => product.prodStatus !== 0
      );
      setProducts(activeProducts);
    };

    fetchAndSetProducts();
  }, []);

  const deleteProduct = async (prodIndex: number) => {
    if (window.confirm("해당 상품을 삭제하시겠습니까?")) {
      try {
        const response = await fetch(
          `http://localhost:3560/api/deleteproduct/${prodIndex}`,
          {
            method: "PATCH",
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setProducts(
          products.map((product) =>
            product.prodIndex === prodIndex
              ? { ...product, prodStatus: 0 }
              : product
          )
        );
        alert("상품이 성공적으로 삭제되었습니다.");
        const updatedProducts = await fetchProducts();
        const activeProducts = updatedProducts.filter(
          (product) => product.prodStatus !== 0
        );
        setProducts(activeProducts);
      } catch (error) {
        console.error("Error deactivating product:", error);
        alert("상품 삭제에 실패했습니다.");
      }
    }
  };

  const editProduct = (prodIndex: number) => {
    router.push(`/admin/product-edit/${prodIndex}`); // 상품 수정 페이지로 라우팅
  };

  const navigateToAddProductPage = () => {
    router.push("/admin/product-add");
  };

  return (
    <div className="flex container mx-auto p-4 items-center justify-between flex-col w-full h-full">
      <div className="overflow-scroll overflow-x-auto w-full h-full border-b border-slate-800 ">
        <div className="overflow-y-auto h-full">
          <table className="min-w-full leading-normal">
            <thead className="sticky top-0 bg-gray-500">
              <tr>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300 text-center text-xs font-semibold uppercase tracking-wider">
                  상품 번호
                </th>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300 text-center text-xs font-semibold uppercase tracking-wider">
                  이미지
                </th>
                <th className="w-1/12 px-5 py-3 border-b-2 border-wine text-yellow-300 text-center text-xs font-semibold uppercase tracking-wider">
                  상품명
                </th>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300 text-center text-xs font-semibold uppercase tracking-wider w-1/2">
                  설명
                </th>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300 text-center text-xs font-semibold uppercase tracking-wider">
                  가격
                </th>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300 text-center text-xs font-semibold uppercase tracking-wider">
                  재고
                </th>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300 text-center text-xs font-semibold uppercase tracking-wider">
                  카테고리
                </th>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300 text-center text-xs font-semibold uppercase tracking-wider">
                  작업
                </th>
              </tr>
            </thead>
            <tbody className="overflow-scroll overflow-x-hidden">
              {products.map((product) => (
                <tr key={product.prodIndex} className="text-center">
                  <td className="px-5 py-5 border-b border-wine text-sm">
                    <p className="whitespace-no-wrap">{product.prodIndex}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-wine text-sm">
                    <div className="flex-shrink-0 w-10 h-10">
                      <Image
                        width={50}
                        height={50}
                        className="w-full h-full rounded-full"
                        src={`/images${product.prodImgUrl}`}
                        alt="image"
                      />
                    </div>
                  </td>

                  <td className="pl-6 pr-5 py-5 border-b border-wine text-sm w-1/12">
                    <p className="whitespace-no-wrap text-left">
                      {product.prodName}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-wine text-sm">
                    <p className="whitespace-no-wrap cursor-text text-left">
                      {product.prodDescription}
                    </p>
                  </td>
                  <td className="px-4 py-5 border-b border-wine text-sm">
                    <p className="whitespace-no-wrap">{product.prodPrice}원</p>
                  </td>
                  <td className="px-4 py-5 border-b border-wine text-sm">
                    <p className="whitespace-no-wrap">{product.prodStock}개</p>
                  </td>
                  <td className="px-5 py-5 border-b border-wine text-sm">
                    <p className="whitespace-no-wrap">{product.prodCategory}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-wine text-sm">
                    <button
                      onClick={() => editProduct(product.prodIndex)}
                      className="text-blue-500 hover:text-blue-800 cursor-pointer"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => deleteProduct(product.prodIndex)}
                      className="text-red-500 hover:text-red-800 ml-4 cursor-pointer"
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="productListBottom w-full flex items-center justify-end">
        <button
          onClick={navigateToAddProductPage}
          className="adminBtnStyle mt-4 font-bold py-2 px-6 rounded border border-slate-800 cursor-pointer"
        >
          상품 등록
        </button>
      </div>
    </div>
  );
}
