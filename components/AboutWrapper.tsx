"use client";
import React from "react";
import About from "./About";
import Procedure from "./Procedure";
import Highlight from "./Highlight";
import { ProcedureType } from "../types/ProcedureType";

const desc = `Providing a comprehensive range of general and specialist dental care to local and international patients, the Sani Dental Group is one of Mexico’s leading dental providers with three clinics in two locations.
Established in 1985 by Dr Enrique Jimenez Alvarez, a specialist in Implantology and Laser Dentistry, there are now 30 specialists across the group who have had international training at prestigious medical institutions across the world, including Harvard School of Dental Medicine, in the USA and MegaGen Implants in South Korea.



The Group has long been a favorite of dental tourists, particularly Americans and Canadians. Affordable prices, Sani’s commitment to the wellbeing of its patients and delivering excellent quality dentistry continues to attract patients from far and wide.



Cancun offers a seaside resort destination with white, sandy beaches lapped by the blue Caribbean Sea. It is the perfect environment for a vacation, and a relaxing environment if you are visiting as a dental tourist.



Specialists at Sani Dental include Maxillofacial Surgeons, Periodontists, Implantologists, Anesthesiologists, Endodontists, Oral Surgeons, Prosthodontists and Cosmetic Dentists who offer the following treatments:



- Dental Implants, including All-on-4®

- Bone Grafts

- Teeth Whitening

- Root Canals

- Veneers

- Crowns & Bridges

- Dentures

- Fillings



How to Book Your Appointment:



Book an appointment at Sani Dental - Group Playacar online with Dental Departures. Or, if you’ve any questions, please get in touch with our Customer Care Team.`;

const dentalProcedures: ProcedureType[] = [
  {
    name: "Implant Procedures",
    description:
      "Procedures to replace missing teeth with artificial tooth roots.",
    averageCost: "Varies widely",
    averageDays: "Varies; typically multiple visits over several months",
  },
  {
    name: "Crowns/Veneers",
    description:
      "Procedures to cover or replace the external portion of teeth.",
    averageCost: "Varies widely",
    averageDays: "Usually 2-3 visits over a few weeks",
  },
  {
    name: "Dentures",
    description: "Custom-made replacements for missing teeth.",
    averageCost: "Varies widely",
    averageDays: "Varies; typically several weeks for fitting and adjustments",
  },
  {
    name: "Root Canal Treatment",
    description: "Treatment for infected or damaged tooth pulp.",
    averageCost: "Varies",
    averageDays: "Usually 1-3 visits",
  },
  {
    name: "Cleaning, Whitening, Fillings & Extractions",
    description: "Routine dental treatments for oral hygiene and tooth repair.",
    averageCost: "Varies",
    averageDays: "Typically single visit",
  },
  {
    name: "Diagnostics",
    description:
      "Procedures for identifying dental issues, including X-rays and exams.",
    averageCost: "Varies",
    averageDays: "Typically single visit",
  },
  {
    name: "Other Procedures",
    description: "Various other dental treatments not categorized above.",
    averageCost: "Varies",
    averageDays: "Depends on specific procedure",
  },
];

const AboutWrapper = () => {
  return (
    <div className="flex flex-col-reverse gap-6 md:flex-row">
      <div className="w-full md:w-1/2 lg:w-2/3">
        <div className="divide-slate-400">
          <About title="About Sani Dental Group Playacar" description={desc} />
        </div>
        <div>
          <Procedure procedures={dentalProcedures} />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <Highlight />
      </div>
    </div>
  );
};

export default AboutWrapper;
