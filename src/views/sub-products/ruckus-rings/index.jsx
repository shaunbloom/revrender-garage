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
    background-image: url('/assets/products/ruckus-rings/rr-01.jpg');
  }

  &.image-2 {
    background-image: url('/assets/products/ruckus-rings/rr-02.jpg');
  }

  &.image-3 {
    background-image: url('/assets/products/ruckus-rings/rr-03.jpg');
  }

  &.image-4 {
    background-image: url('/assets/products/ruckus-rings/rr-04.jpg');
  }
  &.image-5 {
    background-image: url('/assets/products/ruckus-rings/rr-05.jpg');
  }
`;


const RuckusRings = ({
    images = []
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 5; // Total number of images

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
        </ImageWrapper>
        <Description>
          The Rev Render Ruckus Rings gives you an option to dress up the PVC plate on the back right side
          of your bike. With a ton of colors to choose from you can add matching accents to your bike or mix
          and match for a very colorful effect. A lot of Ruckus owners straight up delete this plate but
          that requires metal and paint work. This is an non-invasive and extremely inexpensive alternative to the
          permanent removal of the plate.

          <p>
            The rings are printed from a very strong PLA and have been fitted perfectly to the hole. When
            these snap in to place, the are in place and are not going anywhere. A perfect accent to set
            your bike apart from all the rest. Custom is always he way to go when it comes to looks!! Dare to be
            different...
          </p>
          <Notes>
              <BoldText>Note:</BoldText> For multi-color orders there is an additional $5 fee.</Notes>
          <Price>
            <BoldText>Set of 5 single color rings:</BoldText> $20 (includes shipping)
          </Price>
          <Price>
            <BoldText>Set of 5 multi-color rings:</BoldText> $25 (includes shipping)
          </Price>
        </Description>
    </Container>
  </>
  );
};

export default RuckusRings;