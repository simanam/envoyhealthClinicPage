// components/RatingBar.tsx
import React from "react";
import { RatingType } from "@/types/ProcedureType";

interface RatingBarProps {
  rating: RatingType;
}

const RatingBar: React.FC<RatingBarProps> = ({ rating }) => {
  const widthPercentage = (rating.rating / 5) * 100;

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-xs font-semibold">{rating.category}</span>
        <span className="text-xs font-semibold">
          {rating.rating.toFixed(1)}/5
        </span>
      </div>
      <div className="w-full bg-dark-grey rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-bright-blue h-2.5 rounded-full"
          style={{ width: `${widthPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default RatingBar;
