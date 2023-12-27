import React from "react";
import StarIcon from "./StarIcon";

interface RatingProps {
  rating: number; // Rating value from 0 to 5
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const filledColor = "#fb6e67"; // Blue
  const unfilledColor = "#6D6D6D"; // Grey

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((value) => (
        <StarIcon
          key={value}
          fill={value <= rating ? filledColor : unfilledColor}
        />
      ))}
    </div>
  );
};

export default Rating;
