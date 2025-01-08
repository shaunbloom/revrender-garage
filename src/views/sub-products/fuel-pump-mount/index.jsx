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
    background-image: url('/assets/products/fuel-pump-mount/fpm-01.jpg');
  }

  &.image-2 {
    background-image: url('/assets/products/fuel-pump-mount/fpm-02.jpg');
  }

  &.image-3 {
    background-image: url('/assets/products/fuel-pump-mount/fpm-03.jpg');
  }
`;


const FuelPumpMount = ({
    images = []
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalImages]);

  return (
      <>
        <Title>Maddog Gen 4 & 5 Fuel Pump Mount</Title>
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
          The Rev Render Maddog Gen 4 & 5 fuel pump mount gives you the opportunity to mount an electronic pump under
          the front of the seat hidden from view. Without having to mount it to the under seat plate you don't need to
          remove it every time you want to get to the top of your engine. The pump itself is also much easier to get to
          as it's not buried under the seat plate.

          <p>
            If you're looking to solve the prolonged start up, dying when the bike is leaning too far to one
            side (notorious with Maddogs) or the cutting out intermittently during rides... an electronic fuel pump is
            what you need. This mount makes getting the below recommend fuel pump installed much quicker and easier. In
            30 minutes or less you should be good to ride!
          </p>
          <Notes>
            <BoldText>Note:</BoldText> We recommend using the fuel pump provided through the Amazon link below. The
            mount was made to work with this specific pump.
          </Notes>
          <Links>
            <BoldText>Amazon link:</BoldText>
            <a href="https://a.co/d/bZ6FQbI" target="_blank">Fuel pump</a>
          </Links>
          <Price>
            <BoldText>Single fuel pump mount:</BoldText> $20 (includes shipping)
          </Price>
        </Description>
      </Container>
    </>
  );
};

export default FuelPumpMount;