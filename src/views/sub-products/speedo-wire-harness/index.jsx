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
      <Title>Speedometer Wiring Harness</Title>
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
        </ImageWrapper>
        <Description>
          The Rev Render speedometer wire harness allows you to convert the pin connectors from the suggested
          speedometer 9 pin plug to map the wires and match them up to the stock GY6 wire harness. This is a plug and
          play setup which makes it an incredibly quick and easy upgrade to install.

          <p>
            For those looking to mount there own 88 speedometer you will just need the mount and the case. Wiring your
            speedometer up to your bike will be up to you. That being said most of these electronics coming with
            excellent wiring diagrams which should allow you to repin the speedo to match the GY6 9 pin connector.
            GY6 wiring diagrams can be found on the web.
          </p>
          <Notes>
              <BoldText>Note:</BoldText> For Gen 4 Maddogs you simply need the case and mount. You might have to extend the speedo wires a bit but
              no wire harness is needed for this as the bike is already pinned correctly.</Notes>
          <Price>
            <BoldText>Single harness:</BoldText> $25 (includes shipping)
          </Price>
        </Description>
    </Container>
   </>
  );
};

export default SpeedoWireHarness;