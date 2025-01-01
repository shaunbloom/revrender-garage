import React, { useEffect, useState } from "react";
import FadingCarousel from '../../../components/carousel/index.jsx';
import styled from "@emotion/styled";

const Title = styled.h2`
    text-align: left;
`;

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
  transition: opacity 2s ease-in-out;

  &.visible {
    opacity: 1;
  }

  &.image-1 {
    background-image: url('/assets/products/double-blinker-mounts/dbm-01.jpg');
  }

  &.image-2 {
    background-image: url('/assets/products/double-blinker-mounts/dbm-02.jpg');
  }

  &.image-3 {
    background-image: url('/assets/products/double-blinker-mounts/dbm-03.jpg');
  }

  &.image-4 {
    background-image: url('/assets/products/double-blinker-mounts/dbm-04.jpg');
  }

  &.image-5 {
    background-image: url('/assets/products/double-blinker-mounts/dbm-05.jpg');
  }
  &.image-6 {
    background-image: url('/assets/products/double-blinker-mounts/dbm-06.jpg');
  }
`;


const DoubleBlinkerMounts = ({
    images = []
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalImages]);

  return (
      <>
        <Title>Double Blinker Mounts</Title>
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
          <BackgroundImage
            className={`image-4 ${currentImage === 3 ? "visible" : ""}`}
          />
          <BackgroundImage
            className={`image-5 ${currentImage === 4 ? "visible" : ""}`}
          />
          <BackgroundImage
            className={`image-6 ${currentImage === 5 ? "visible" : ""}`}
          />
        </ImageWrapper>
      </>
  );
};

export default DoubleBlinkerMounts;