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


const RuckusRings = ({
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
        <Title>Ruckus Rings</Title>
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
          <BackgroundImage
            className={`image-7 ${currentImage === 6 ? "visible" : ""}`}
          />
        </ImageWrapper>
        <Description>
          The Rev Render Ruckus Rings gives you an option to dress up the PVC plate on the back right side
          of your bike. With a ton of colors to choose from you can add matching accents to your bike or mix
          and match for a very colorful effect. A lot of Ruckus owners straight up delete this plate but
          that requires metal and paint work. This is an non-invasive and extremely inexpensive alternative.

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

export default RuckusRings;