// components/ReviewsList.tsx
import React from "react";
import ReviewCard from "./ReviewCard";
import { ReviewType } from "@/types/ProcedureType";

const reviews: ReviewType[] = [
  {
    firstName: "John",
    lastName: "Doe",
    userImage: "https://via.placeholder.com/150",
    city: "Los Angeles",
    country: "USA",
    ratings: [
      { category: "Quality", rating: 4 },
      { category: "Service", rating: 4 },
      { category: "Cleanliness", rating: 4 },
      { category: "Comfort", rating: 4 },
      { category: "Communication", rating: 4 },
      { category: "Value", rating: 4 },
    ],
    averageRating: 4,
    comments: "Excellent service and friendly staff.",
    photos: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    doctorName: "Dr. Smith",
    dateOfAppointment: "2023-01-15",
    treatmentPerformed: "Teeth Whitening",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    userImage: "https://via.placeholder.com/150",
    city: "New York",
    country: "USA",
    ratings: [
      { category: "Quality", rating: 5 },
      { category: "Service", rating: 5 },
      { category: "Cleanliness", rating: 5 },
      { category: "Comfort", rating: 5 },
      { category: "Communication", rating: 5 },
      { category: "Value", rating: 5 },
    ],
    averageRating: 5,
    comments: "Outstanding experience and high-quality treatment.",
    photos: ["https://via.placeholder.com/150"],
    doctorName: "Dr. Johnson",
    dateOfAppointment: "2023-02-20",
    treatmentPerformed: "Dental Implants",
  },
  // Adding two more reviews
  {
    firstName: "Alice",
    lastName: "Williams",
    userImage: "https://via.placeholder.com/150",
    city: "Chicago",
    country: "USA",
    ratings: [
      { category: "Quality", rating: 4 },
      { category: "Service", rating: 3 },
      { category: "Cleanliness", rating: 4 },
      { category: "Comfort", rating: 3 },
      { category: "Communication", rating: 4 },
      { category: "Value", rating: 4 },
    ],
    averageRating: 3.7,
    comments: "Good service but the waiting time was longer than expected.",
    photos: [],
    doctorName: "Dr. Brown",
    dateOfAppointment: "2023-03-05",
    treatmentPerformed: "Root Canal Treatment",
  },
  {
    firstName: "Michael",
    lastName: "Thompson",
    userImage: "https://via.placeholder.com/150",
    city: "Miami",
    country: "USA",
    ratings: [
      { category: "Quality", rating: 5 },
      { category: "Service", rating: 5 },
      { category: "Cleanliness", rating: 5 },
      { category: "Comfort", rating: 5 },
      { category: "Communication", rating: 5 },
      { category: "Value", rating: 5 },
    ],
    averageRating: 5,
    comments: "Fantastic service, very comfortable environment.",
    photos: ["https://via.placeholder.com/150"],
    doctorName: "Dr. Martinez",
    dateOfAppointment: "2023-04-10",
    treatmentPerformed: "Veneers",
  },
  // ... more reviews ...
];

const ReviewsList: React.FC = () => {
  const topFiveReviews = reviews.slice(0, 5); // Assuming reviews are already sorted by date

  return (
    <div className="overflow-auto h-[60vh]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">Recent Reviews</h2>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add Review
        </button>
      </div>
      {topFiveReviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
      <button className="w-full mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300">
        See All Reviews
      </button>
    </div>
  );
};

export default ReviewsList;
