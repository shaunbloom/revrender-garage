import React, { useEffect, useState } from "react";
import FadingCarousel from '../../../../components/carousel/index.jsx';
import styled from "@emotion/styled";
import { BoldText, Container, Description, ImageWrapper, Notes, Links, Price } from "../../layout/index.jsx";

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
    background-image: url('/assets/products/Ruckus/side-caps/rsc-01.jpg');
  }
  &.image-2 {
    background-image: url('/assets/products/Ruckus/side-caps/rsc-02.jpg');
  }
  &.image-3 {
    background-image: url('/assets/products/Ruckus/side-caps/rsc-03.jpg');
  }
  &.image-4 {
    background-image: url('/assets/products/Ruckus/side-caps/rsc-04.jpg');
  }
  &.image-5 {
    background-image: url('/assets/products/Ruckus/side-caps/rsc-05.jpg');
  }
  &.image-6 {
    background-image: url('/assets/products/Ruckus/side-caps/rsc-06.jpg');
  }
  &.image-7 {
    background-image: url('/assets/products/Ruckus/double-blinker-mounts/rdbm-07.jpg');
  }
`;


const RuckusSideCaps = ({
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
        <Title>Ruckus Side Caps</Title>
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
          The Rev Render Ruckus Side Caps simply do one thing..... they plug the large holes on each side of your bike.
           We have never cared for the open pipe ends on the frames of the Ruckus as well as other clone versions. Hence
           the caps! Make your bike pop with custom colors of your choice. Your friends will wonder where you got them
           and how the heck can they get their hands on some! Dare to stand out!
          <Notes>
              <BoldText>Notes:</BoldText> Sometimes due to thick powder coating or weld that gets into the edge of the
              pipe end you experience the caps can being a little tight when inserting. We recommend just using a
              plastic hammer to persuade the cap into place. Standard hammer with a rag in between will work as well.
          </Notes>
          <Price>
            <BoldText>Set of 2 caps:</BoldText> $15 (includes shipping)
          </Price>
        </Description>
    </Container>
  </>
  );
};

export default RuckusSideCaps;