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
    background-image: url('/assets/products/speedo-case/sc-01.jpg');
  }

  &.image-2 {
    background-image: url('/assets/products/speedo-case/sc-02.jpg');
  }

  &.image-3 {
    background-image: url('/assets/products/speedo-case/sc-03.jpg');
  }

  &.image-4 {
    background-image: url('/assets/products/speedo-case/sc-04.jpg');
  }
  &.image-5 {
    background-image: url('/assets/products/speedo-case/sc-05.jpg');
  }

  &.image-6 {
    background-image: url('/assets/products/speedo-case/sc-06.jpg');
  }

  &.image-7 {
    background-image: url('/assets/products/speedo-case/sc-07.jpg');
  }
`;


const SpeedoConversion = ({
    images = []
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 7; // Total number of images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalImages]);

  return (
      <>
      <Container>
        <Title>Speedometer Case</Title>
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
          <BackgroundImage
            className={`image-7 ${currentImage === 6 ? "visible" : ""}`}
          />
        </ImageWrapper>
        <Description>
          The Rev Render Speedometer case allows you to enclose an 88mm speedometer of your choice and gives you an alternate way to mount it (Mount not included). A few scooters out there sell their bikes with open backed speedometers

          <p>
            This kit will allow you to remove a gauge cluster and replace it with an 88mm digital speedometer which give
            a much more custom sleek look. This is kit is great to replace the three plastic fake chrome gauge
            cluster that are on a lot of the DAIX Chinese scooters, including the Gen 1 Maddogs. It also offer the
            ability to cover the Gen 4 Maddog speedometers and give them a sleek custom look while hiding the wires
            and mounting bolts. (Ruckus mounts coming soon.)
          </p>
            <Notes>
              <BoldText>Note:</BoldText> Speedometer is not include in the convesion kit. (Supporting 3rd party electronics is not
              something we're willing to take on at this point.)
            </Notes>

            <Links>
              <BoldText>Amazon Speedo Link:</BoldText> <a href="https://a.co/d/2VwNNYf" target="_blank">https://a.co/d/2VwNNYf</a>
            </Links>

            <Price>
              <BoldText>Base Kit:</BoldText> $75 (includes shipping)
            </Price>

            <Price>
              <BoldText>Full Custom Kit:</BoldText> $100 (Includes 2 tone speedo case and powder coated mount and shipping)
            </Price>
        </Description>
    </Container>
  </>
  );
};

export default SpeedoConversion;