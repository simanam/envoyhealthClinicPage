import React, { useState, useEffect } from "react";
import ImagesIcon from "@/components/ImagesIcon";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => {
    setIsOverlayOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling on the main page
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
    document.body.style.overflow = "unset"; // Re-enable scrolling
  };

  useEffect(() => {
    // Clean up to re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div className="flex bg-dark-grey rounded-lg  h-[70vh]">
        <div className="w-full lg:w-3/5 overflow-hidden h-[100%] relative">
          <img
            src={images[0]}
            alt="main Image of clinic"
            className="w-full h-full object-cover rounded-lg lg:rounded-l-lg transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <button
            onClick={openOverlay}
            className=" md:hidden absolute bottom-2 right-2 bg-bright-blue text-white p-2 rounded z-10 hover:bg-sky-blue flex flex-row gap-2 items-center justify-center"
          >
            <ImagesIcon fill="#FFFFFF" /> View All
          </button>
        </div>
        <div>
          <div className="hidden lg:w-[100%]  h-[100%] md:grid md:grid-cols-2 lg:grid-cols-2">
            {images.slice(1, 5).map((image, index) => (
              <div key={index} className="relative w-full  overflow-hidden">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={`w-full h-full object-cover align-bottom transition-transform duration-300 ease-in-out ${
                    index === 1 ? "rounded-tr-lg" : "" // Top right rounded for the second image
                  } ${
                    index === 3 ? "rounded-br-lg" : "" // Bottom right rounded for the fourth image
                  } hover:scale-110`}
                />
                {index === 3 && (
                  <button
                    onClick={openOverlay}
                    className="absolute bottom-2 right-2 bg-bright-blue text-white p-2 rounded z-10 hover:bg-sky-blue flex flex-row gap-2 items-center justify-center"
                  >
                    <ImagesIcon fill="#FFFFFF" /> View All
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {isOverlayOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 p-4 flex justify-center items-center overflow-y-auto">
          <div className="columns-1 md:columns-2 lg:columns-2 gap-1">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Overlay Image ${index}`}
                className="w-full h-auto object-cover p-2"
              />
            ))}
          </div>
          <button
            onClick={closeOverlay}
            className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
