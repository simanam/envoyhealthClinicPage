// components/ReviewCard.tsx
import React from "react";
import { ReviewType } from "@/types/ProcedureType"; // Adjust the import path as necessary
import RatingBar from "./RatingBar";
import Rating from "./RatingProps";
import DoctorIcon from "./DoctorIcon";
import TreatmentIcon from "./TreatmentIcon";

interface ReviewCardProps {
  review: ReviewType;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="border border-gray-200 rounded p-4 mb-4 flex flex-col gap-4">
      <div className="flex flex-row gap-2">
        <img
          src={review.userImage}
          alt={review.firstName}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col">
          <h4 className="font-bold">
            {review.firstName} {review.lastName}
          </h4>
          <p className="text-sm">
            {review.city}, {review.country}
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Rating rating={review.averageRating} />
        <p className="text-sm text-slate-gray">{review.dateOfAppointment}</p>
      </div>
      <div className="flex flex-row gap-2 items-start">
        <DoctorIcon />
        <p className="text-sm text-slate-gray">{review.doctorName}</p>
        <TreatmentIcon />
        <p className="text-sm text-slate-gray">{review.treatmentPerformed}</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <p className="text-xs text-dark-grey font-semibold">
          {review.comments}
        </p>
      </div>
      <div className="flex flex-col gap-1 w-[100%] md:w-[30%]">
        {review.ratings.map((rating) => (
          <RatingBar key={rating.category} rating={rating} />
        ))}
      </div>
      <div className="flex flex-row gap-2 overflow-auto">
        {review.photos?.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={review.firstName}
            className="w-20 h-20 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
