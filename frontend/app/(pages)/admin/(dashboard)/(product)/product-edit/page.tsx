// 상품 등록 페이지

"use client";
import React, { useState } from "react";

export default function ProductAdd() {
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [prodCategory, setProdCategory] = useState("");
  const [prodImgUrl, setProdImgUrl] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodStock, setProdStock] = useState("");

  const submitProduct = async () => {
    if (!prodName.trim()) {
      alert("상품명을 입력해주세요.");
      return;
    }
    if (!prodDescription.trim()) {
      alert("상품 설명을 입력해주세요.");
      return;
    }
    if (!prodCategory) {
      alert("상품 카테고리를 선택해주세요.");
      return;
    }
    if (!prodImgUrl.trim()) {
      alert("상품 이미지 URL을 입력해주세요.");
      return;
    }
    if (!prodPrice.trim() || prodPrice === "0") {
      alert("상품 가격을 올바르게 입력해주세요.");
      return;
    }
    if (!prodStock.trim() || prodPrice === "0") {
      alert("상품 재고를 올바르게 입력해주세요.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3560/api/addproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prodName,
          prodDescription,
          prodCategory,
          prodImgUrl,
          prodPrice,
          prodStock,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      alert("상품이 성공적으로 추가되었습니다!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("상품 추가에 실패했습니다.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="mb-4">
        <label
          htmlFor="prodName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          상품명
        </label>
        <input
          type="text"
          id="prodName"
          value={prodName}
          onChange={(e) => setProdName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="상품명"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="prodDescription"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          상품 설명
        </label>
        <input
          type="text"
          id="prodDescription"
          value={prodDescription}
          onChange={(e) => setProdDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="상품 설명"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="prodCategory"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          상품 카테고리
        </label>
        <select
          id="prodCategory"
          value={prodCategory}
          onChange={(e) => setProdCategory(e.target.value)}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-400"
        >
          <option value="">카테고리 선택</option>
          <option value="Zerg">Zerg</option>
          <option value="Terran">Terran</option>
          <option value="Protoss">Protoss</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="prodImgUrl"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          상품 이미지 URL
        </label>
        <input
          type="text"
          id="prodImgUrl"
          value={prodImgUrl}
          onChange={(e) => setProdImgUrl(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="상품 이미지 URL"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="prodPrice"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          상품 가격
        </label>
        <input
          type="number"
          id="prodPrice"
          value={prodPrice}
          onChange={(e) => setProdPrice(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="상품 가격"
          min="0"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="prodStock"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          상품 재고
        </label>
        <input
          type="number"
          id="prodStock"
          value={prodStock}
          onChange={(e) => setProdStock(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="상품 재고"
          min="0"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={submitProduct}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          상품 등록
        </button>
      </div>
    </div>
  );
}
