import React, { useEffect, useState } from "react";
import FadingCarousel from '../../../components/carousel/index.jsx';
import styled from "@emotion/styled";
import { BoldText, Container, Description, ImageWrapper, Notes, Links, Price } from "../layout/index.jsx";

const Title = styled.h2`
    text-align: left;
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
        <Container>
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
        <Description>
          The Rev Render Double Blinker Mount adaptors allow you to convert the single hole mounts on the back of your
          Gen 1 Maddogs to a double hole mount allowing for two blinkers on each side. Why would you need two blinkers
          on each side of your brake light you ask... Because it looks insanely cool. Besides the Killer esthetics this
          adapter offers it also gives you the ability to gain that much more visibility while riding.

          <p>
            When using The double blinker mounts with the lights that we suggest you will gain running lights, brake
            lights as well as blinker lights. The visibility gained from this upgrade compared to the stock lights is
            incredible. It's an insanely unique look and again, offers much more visibility day or night.
          </p>
          <Notes>
            <BoldText>Note:</BoldText> This kit includes a left and right double blinker mount as well as the two mounting bolts needed. The
            mounting bolts and nuts can be powder coated to a color of your choice for an additional fee.
          </Notes>
          <Price>
            <BoldText>Pair of double blinker mounts:</BoldText> $27 (includes shipping)
          </Price>
          <Price>
            <BoldText>Pair of double blinker mounts (w/powder coated bolts):</BoldText> $35 (includes shipping)
          </Price>
        </Description>
      </Container>
    </>
  );
};

export default DoubleBlinkerMounts;