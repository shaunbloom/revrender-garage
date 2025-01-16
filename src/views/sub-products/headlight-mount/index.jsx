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
    background-image: url('/assets/products/headlight-mount/hlm-01.jpg');
  }

  &.image-2 {
    background-image: url('/assets/products/headlight-mount/hlm-02.jpg');
  }

  &.image-3 {
    background-image: url('/assets/products/headlight-mount/hlm-03.jpg');
  }

  &.image-4 {
    background-image: url('/assets/products/headlight-mount/hlm04.jpg');
  }
  &.image-5 {
    background-image: url('/assets/products/headlight-mount/hlm-05.jpg');
  }

  &.image-6 {
    background-image: url('/assets/products/headlight-mount/hlm-06.jpg');
  }
  &.image-7 {
    background-image: url('/assets/products/headlight-mount/hlm-07.jpg');
  }
 &.image-8 {
   background-image: url('/assets/products/headlight-mount/hlm-08.jpg');
 }
 &.image-9 {
   background-image: url('/assets/products/headlight-mount/hlm-09.jpg');
 }
 `;


const HeadlightMount = ({
    images = []
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 9; // Total number of images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalImages]);

  return (
      <>
      <Title>Single Headlight Conversion Mount</Title>
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
          <BackgroundImage
            className={`image-8 ${currentImage === 7 ? "visible" : ""}`}
          />
          <BackgroundImage
            className={`image-9 ${currentImage === 8 ? "visible" : ""}`}
          />
        </ImageWrapper>
        <Description>
          The Rev Render Single headlight conversion mount allows you to switch out your double incandescent headlights
          into a single LED headlight. This is made to work with any single encased headlight with a mounting width of
          145-155mm. The back plate of the mount includes fillet recessed holes to lock it down over the 3 raised
          mounting holes on the front of the battery box. You can easily connect your blinkers to this mount with
          standard size (10mm) mounting holes.
          <p>
            We recommend using this mount with the light provided in the link below but again, it can be used with any
            light that has a mounting with between 145-155mm as the arms can support flexing. This light and mount offer
            an extreme increase in visibility both in the daylight to be seen and the night to see. Custom Baby!!
          </p>
            <Notes>
              <BoldText>Note:</BoldText> This headlight mount can be used with any generation of Maddog and should fit
              all Ruckus scooters as well. If you have any concerns we can always get measurements between mounting
              holes to ensure fit.
            </Notes>

            <Links>
              <BoldText>Amazon Link:</BoldText> <a href="https://www.amazon.com/dp/B09XLB2H9W" target="_blank">Encased LED Headlight</a>
            </Links>

            <Price>
              <BoldText>Headlight mount:</BoldText> $30 (includes shipping)
            </Price>
        </Description>
    </Container>
  </>
  );
};

export default HeadlightMount;