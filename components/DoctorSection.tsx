// components/DoctorsSection.tsx
import React from "react";
import DoctorCard from "./DoctorCard";

const doctors = [
  {
    name: "Dr. Sarah Miller",
    specialty: "Orthodontics",
    imageUrl: "https://via.placeholder.com/150",
    yearsOfExperience: 12,
    education: "Harvard School of Dental Medicine",
    associations: ["American Association of Orthodontists"],
  },
  {
    name: "Dr. Alex Johnson",
    specialty: "Periodontics",
    imageUrl: "https://via.placeholder.com/150",
    yearsOfExperience: 9,
    education: "New York University College of Dentistry",
    associations: ["American Academy of Periodontology"],
  },
  {
    name: "Dr. Emily Clark",
    specialty: "Pediatric Dentistry",
    imageUrl: "https://via.placeholder.com/150",
    yearsOfExperience: 7,
    education: "University of Pennsylvania School of Dental Medicine",
    associations: ["American Academy of Pediatric Dentistry"],
  },
  {
    name: "Dr. Michael Brown",
    specialty: "Endodontics",
    imageUrl: "https://via.placeholder.com/150",
    yearsOfExperience: 10,
    education: "University of California, San Francisco, School of Dentistry",
    associations: ["American Association of Endodontists"],
  },
  {
    name: "Dr. Linda White",
    specialty: "Prosthodontics",
    imageUrl: "https://via.placeholder.com/150",
    yearsOfExperience: 11,
    education: "Columbia University College of Dental Medicine",
    associations: ["American College of Prosthodontists"],
  },
  {
    name: "Dr. Kevin Patel",
    specialty: "Oral and Maxillofacial Surgery",
    imageUrl: "https://via.placeholder.com/150",
    yearsOfExperience: 15,
    education: "University of Michigan School of Dentistry",
    associations: ["American Association of Oral and Maxillofacial Surgeons"],
  },
];

const DoctorsSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl  mb-3">Meet our Doctors</h2>
      <div className="flex overflow-x-auto gap-4">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsSection;
