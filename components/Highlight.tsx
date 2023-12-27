import React from "react";
import RatingBar from "./RatingBar";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import TwitterIcon from "./TwitterIcon";
import TiktokIcon from "./TiktokIcon";
import Stat from "./Stat";
import { RatingType } from "../types/ProcedureType";
import ButtonComp from "./ButtonComp";

const ratings: RatingType[] = [
  {
    category: "Cleanliness",
    rating: 4.5, // out of 5
  },
  {
    category: "Communication",
    rating: 4.7, // out of 5
  },
  {
    category: "Comfort",
    rating: 4.2, // out of 5
  },
  {
    category: "Quality",
    rating: 4.8, // out of 5
  },
  {
    category: "Value",
    rating: 4.4, // out of 5
  },
  {
    category: "Service",
    rating: 4.6, // out of 5
  },
];

const Highlight = () => {
  return (
    <div className="bg-off-blue w-[100%] h-auto p-6 flex flex-col rounded-lg gap-6">
      <Stat />

      <div className="flex flex-row gap-2 items-center">
        <div className="w-fit h-auto p-2 bg-blue-200 rounded-lg">
          <p className="text-xs font-bold text-dark-grey">Languages :</p>
        </div>
        <p className="text-xs text-dark-grey font-semibold">English, Spanish</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div className="w-fit h-auto p-2 bg-blue-200 rounded-lg">
          <p className="text-xs font-bold text-dark-grey">Affiliation :</p>
        </div>
        <p className="text-xs text-dark-grey font-semibold">
          American Dental Association, JCI
        </p>
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="w-fit h-auto p-2 bg-blue-200 rounded-lg">
          <p className="text-xs font-bold text-dark-grey">Rating :</p>
        </div>
        <div className="container mx-auto p-4 ">
          {ratings.map((rating) => (
            <RatingBar key={rating.category} rating={rating} />
          ))}
          <div className="w-[100%] flex justify-end">
            {" "}
            <ButtonComp
              size="small"
              variant="outline"
              children="View All Reviews"
            />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col gap-2 ">
        <div className="w-fit h-auto p-2 bg-blue-200 rounded-lg">
          <p className="text-xs font-bold text-dark-grey">Social :</p>
        </div>
        <div className="flex flex-row gap-6 p-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="h-6 w-6" fill="#373b56" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="h-6 w-6" fill="#373b56" />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiktokIcon className="h-6 w-6" fill="#373b56" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="h-6 w-6" fill="#373b56" />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Highlight;
