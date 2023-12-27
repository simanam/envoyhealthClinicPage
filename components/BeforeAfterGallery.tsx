import React from "react";

interface BeforeAfterImage {
  before: string;
  after: string;
}

interface BeforeAfterGalleryProps {
  images: BeforeAfterImage[];
}

const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ images }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((imagePair, index) => (
          <div key={index} className="relative">
            <div className="overflow-hidden">
              <img
                src={imagePair.before}
                alt={`Before ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <span className="absolute top-2 left-2 bg-bright-blue text-white p-1 rounded">
                Before
              </span>
            </div>
            <div className="overflow-hidden relative">
              <img
                src={imagePair.after}
                alt={`After ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <span className="absolute top-2 left-2 bg-coral-red text-white p-1 rounded">
                After
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BeforeAfterGallery;
