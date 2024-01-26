"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductEditPage(params: any) {
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [prodCategory, setProdCategory] = useState("");
  const [prodImgUrl, setProdImgUrl] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodStock, setProdStock] = useState("");
  const prodIndex = params.params.prodIndex;

  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };
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
    if (!prodPrice.trim() || prodPrice === "0") {
      alert("상품 가격을 올바르게 입력해주세요.");
      return;
    }
    if (!prodStock.trim() || prodPrice === "0") {
      alert("상품 재고를 올바르게 입력해주세요.");
      return;
    }

    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const uploadResponse = await fetch("http://localhost:3560/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Image upload failed");
      }

      const uploadData = await uploadResponse.json();
      const prodImgUrl = uploadData.imageUrl; // 업로드된 이미지 URL

      // 상품 정보 제출 부분
      const productResponse = await fetch(
        `http://localhost:3560/api/updateproduct/${prodIndex}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prodName,
            prodDescription,
            prodCategory,
            prodImgUrl, // 이미지 URL 포함하여 전송
            prodPrice,
            prodStock,
          }),
        }
      );

      if (!productResponse.ok) {
        throw new Error("Product submission failed");
      }

      alert("상품이 성공적으로 수정되었습니다!");
      router.push("/admin/product-list");
    } catch (error) {
      console.error("Error:", error);
      alert("상품 수정에 실패했습니다.");
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
          className="block appearance-none w-full text- bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-700"
        >
          <option value="">카테고리 선택</option>
          <option value="Zerg">Zerg</option>
          <option value="Terran">Terran</option>
          <option value="Protoss">Protoss</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="prodImg"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          상품 이미지
        </label>
        <div>
          <input
            type="file"
            id="prodImg"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
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
          className="adminBtnStyle border border-slate-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
        >
          상품 수정
        </button>
      </div>
    </div>
  );
}
