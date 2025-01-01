import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const ImageWrapper = styled.div`
  position: relative;
  width: 450px;
  height: 420px;
  border: 1px solid #fff;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.visible {
    opacity: 1;
  }

  &.image-1 {
    background-image: url('/assets/products/speedo-conversion-kit.jpg');
  }

  &.image-2 {
    background-image: url('/assets/products/speedo-case.jpg');
  }

  &.image-3 {
    background-image: url('/assets/products/speedo-harness.jpg');
  }
`;

const SpeedoConversion = ({
    images = []
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 3; // Total number of images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalImages]);

  return (
    <ImageWrapper>
      <BackgroundImage
        className={`image-1 ${currentImage === 0 ? "visible" : ""}`}
      />
      <BackgroundImage
        className={`image-2 ${currentImage === 1 ? "visible" : ""}`}
      />
      <BackgroundImage
        className={`image-3 ${currentImage === 2 ? "visible" : ""}`}
      />
    </ImageWrapper>
  );
};

export default SpeedoConversion;
