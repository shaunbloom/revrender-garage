import React, { useEffect, useState } from "react";
import FadingCarousel from '../../../../components/carousel/index.jsx';
import styled from "@emotion/styled";
import { BoldText, Container, Description, ImageWrapper, Notes, Links, Price, ProductTitle } from "../../layout/index.jsx";

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
    background-image: url('/assets/products/Ruckus/double-blinker-mounts/rdbm-01.jpg');
  }
  &.image-2 {
    background-image: url('/assets/products/Ruckus/double-blinker-mounts/rdbm-02.jpg');
  }
  &.image-3 {
    background-image: url('/assets/products/Ruckus/double-blinker-mounts/rdbm-03.jpg');
  }
  &.image-4 {
    background-image: url('/assets/products/Ruckus/double-blinker-mounts/rdbm-04.jpg');
  }
  &.image-5 {
    background-image: url('/assets/products/Ruckus/double-blinker-mounts/rdbm-05.jpg');
  }
  &.image-6 {
    background-image: url('/assets/products/Ruckus/double-blinker-mounts/rdbm-06.jpg');
  }
  &.image-7 {
    background-image: url('/assets/products/Ruckus/double-blinker-mounts/rdbm-07.jpg');
  }
`;


const RuckusDoubleBlinkerMounts = ({
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
        <ProductTitle>Ruckus Double Rear Blinker Mounts</ProductTitle>
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
          The Rev Render Ruckus Double Blinker mounts gives you the ability to mount double blinkers on each side of the
          back of the Ruckus frame's lower back bar. These accompany the Ruckus license plate mount that we make as well.
          These mounts allow you to gain a lot more visibility as you have now increased the amount of signal lighting to
          the back of your bike.

          <p>
            The lights used in the product shots are from Amazon and can support brake and running lights which is what
            gives you all of the increased visibility. Now you have 5 running lights and brake lights to accompany the
            double blinkers. Not only does it give you a very badass look but you can standout amongst your fellow
            riders and be a lot safer out there riding. FYI there are different designs of these same light sets.
          </p>
          <Links>
              <BoldText>Amazon link:</BoldText>
              <a href="https://amzn.to/47DnJ2C" target="_blank">1 Pair of
              back blinker lights</a>
          </Links>
          <Notes>
              <BoldText>Notes:</BoldText> If you want to match all of the blinkers front and back of the bike you can
              order the following two kits. Two <a href="https://amzn.to/4mWH3fN" target="_blank">pairs
              (front and rear)</a> and for the second pair in back you can order one <a href="https://amzn.to/4mugkqd" target="_blank"> pair of
              rear blinker lights</a> above. The lights in the front are different from the back as they have white
              running lights and no brake light option.
          </Notes>
          <Price>
            <BoldText>Set of 2 mounts:</BoldText> $30 (includes shipping)
          </Price>
        </Description>
    </Container>
  </>
  );
};

export default RuckusDoubleBlinkerMounts;