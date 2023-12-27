export type ProcedureType = {
  name: string;
  description: string;
  averageDays: string;
  averageCost: string;
};

export type RatingType = {
  category: string;
  rating: number; // Assuming the rating is a number out of 5
};

export type StatisticType = {
  number: string;
  label: string;
};

export type DoctorType = {
  name: string;
  specialty: string;
  imageUrl: string;
  yearsOfExperience: number;
  education: string;
  associations: string[];
};

export type ReviewType = {
  firstName: string;
  lastName: string;
  userImage?: string; // Optional, as not all reviews might have a user image
  city: string;
  country: string;
  ratings: RatingType[];
  averageRating: number;
  comments: string;
  photos?: string[]; // Optional, as not all reviews might have photos
  doctorName: string;
  dateOfAppointment: string; // ISO date string format
  treatmentPerformed: string;
};
