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
    background-image: url('/assets/products/speedo-mounts/sm-01.jpg');
  }

  &.image-2 {
    background-image: url('/assets/products/speedo-mounts/sm-02.jpg');
  }

  &.image-3 {
    background-image: url('/assets/products/speedo-mounts/sm-03.jpg');
  }

  &.image-4 {
    background-image: url('/assets/products/speedo-mounts/sm-04.jpg');
  }

  &.image-5 {
    background-image: url('/assets/products/speedo-mounts/sm-05.jpg');
  }
`;


const SpeedoMounts = ({
    images = []
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalImages]);

  return (
      <>
        <Title>Speedometer Conversion Kit</Title>
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
            </ImageWrapper>
            <Description>
              The Rev Render Speedometer Mounts can be used with any GEN Maddog scooter to allow for use with an
              external gauge housing. We recommend our speedometer case to used with these as they were made to
              compliment each other.  These mounts support both open handlebars and closed handlebars (has cross
              support) to allow for full viewing of your speedometer from a comfortable angle.

              <p>
               These mounts are cut from 7 gauge steel on a fiber laser table to give you the most precise and accurate
               cuts everytime. Easily thick enough to prevent vibration when riding. These mounts can be powder coated
               to any number of different colors and finishes.
              </p>
              <Notes>
                <BoldText>Note:</BoldText> These mounts currently only work with the Icebear Maddog Gen 1,4 & 5.
                  Ruckus mounts will be available soon for both open and closed handlebars.
              </Notes>

              <Links>
                <BoldText>Amazon Speedo Link:</BoldText> <a href="https://a.co/d/2VwNNYf" target="_blank">https://a.co/d/2VwNNYf</a>
              </Links>

              <Price>
                <BoldText>Bare metal mount:</BoldText> $35 (includes shipping)
              </Price>

              <Price>
                <BoldText>Powder coated mount:</BoldText> $45 (Includes shipping)
              </Price>
            </Description>
        </Container>

      </>
  );
};

export default SpeedoMounts;