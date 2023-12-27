// components/DoctorCard.tsx
import React from "react";
import { DoctorType } from "@/types/ProcedureType";
import ButtonComp from "./ButtonComp";

interface DoctorCardProps {
  doctor: DoctorType;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="flex flex-col min-w-80 bg-white rounded-lg shadow p-4 m-2 gap-4 justify-end">
      <div className="flex flex-row gap-4 items-end">
        <img
          src={doctor.imageUrl}
          alt={doctor.name}
          className="w-24 h-24 rounded-full"
        />
        <h3 className="text-lg font-semibold mt-2">{doctor.name}</h3>
      </div>

      <p className="text-sm text-gray-600">{doctor.specialty}</p>
      <p className="text-sm">{doctor.yearsOfExperience} years of experience</p>
      <p className="text-sm">{doctor.education}</p>
      <ul className="text-sm list-disc list-inside">
        {doctor.associations.map((assoc, index) => (
          <li key={index}>{assoc}</li>
        ))}
      </ul>
      <div className="w-[100%] flex items-center justify-center">
        <ButtonComp fullWidth children="Book Appointment" />
      </div>
    </div>
  );
};

export default DoctorCard;
