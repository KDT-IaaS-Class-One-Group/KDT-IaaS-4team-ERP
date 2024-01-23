// ProductRating.tsx

import React, { useState } from "react";

interface ProductRatingProps {
  onRatingChange: (rating: string) => void;
}

const ProductRating: React.FC<ProductRatingProps> = ({ onRatingChange }) => {
  const [selectedRating, setSelectedRating] = useState("");

  const handleRatingClick = (rating: string) => {
    setSelectedRating(rating);
    onRatingChange(rating);
  };

  return (
    <div className="w-4/5 flex justify-start items-center h-20">
      <div className="w-32 text-center">RATING(필수) :</div>

      <div className="flex justify-center items-center h-10">
        {[1, 2, 3, 4, 5].map((rating) => (
          <span
            key={rating}
            className={`cursor-pointer text-3xl ${
              rating <= parseInt(selectedRating, 10)
                ? "text-yellow-500"
                : "text-gray-300"
            }`}
            onClick={() => handleRatingClick(rating.toString())}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductRating;
