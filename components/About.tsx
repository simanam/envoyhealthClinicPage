import React, { useState } from "react";
import ButtonComp from "./ButtonComp";
import useMediaQuery from "../hooks/useMediaQuery";

const About = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMediumOrLarger = useMediaQuery("(min-width: 768px)");

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const truncateDescription = (text: string) => {
    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [];
    const sentenceCount = isMediumOrLarger ? 2 : 1;
    return sentences.length > sentenceCount
      ? sentences.slice(0, sentenceCount).join(" ")
      : text;
  };

  return (
    <div className="w-[100%]">
      <h2 className="text-xl mb-3">{title}</h2>

      <p className="text-slate-gray text-sm mb-3">
        {isExpanded ? description : truncateDescription(description)}

        <ButtonComp
          size="regular"
          variant="link"
          children={isExpanded ? "Read Less" : "Read More"}
          onClick={toggleReadMore}

          // onClick={() => setIsExpanded(!isExpanded)}   // This is the same as the toggleReadMore function
        />
      </p>
    </div>
  );
};

export default About;
