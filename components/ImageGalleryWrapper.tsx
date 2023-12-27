"use client";

import React from "react";
import ImageGallery from "./ImageGallery.client";

interface ImageGalleryWrapperProps {
  images: string[];
}

const ImageGalleryWrapper: React.FC<ImageGalleryWrapperProps> = ({
  images,
}) => {
  return <ImageGallery images={images} />;
};

export default ImageGalleryWrapper;
