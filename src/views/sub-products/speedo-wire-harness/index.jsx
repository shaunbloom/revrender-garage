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
    background-image: url('/assets/products/speedo-harness/swh-01.jpg');
  }

  &.image-2 {
    background-image: url('/assets/products/speedo-harness/swh-02.jpg');
  }

  &.image-3 {
    background-image: url('/assets/products/speedo-harness/swh-03.jpg');
  }
`;


const SpeedoWireHarness = ({
    images = []
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 3; // Total number of images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalImages]);

  return (
      <>
      <Container>
        <Title>Speedometer Wiring Harness</Title>
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
        <Description>
          The Rev Render speedometer wire harness allows you to convert the

          <p>
            The rings are printed from a very strong PLA and have been fitted perfectly to the hole. When
            these snap in to place, the are in place and are not going anywhere. A perfect accent to set
            your bike apart from all the rest. Dare to be different...
          </p>
          <Price>
            <BoldText>Set of 5 rings:</BoldText> $20 (includes shipping)
          </Price>
        </Description>
    </Container>
   </>
  );
};

export default SpeedoWireHarness;