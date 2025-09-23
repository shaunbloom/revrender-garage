import React, { useEffect, useState } from "react";
import FadingCarousel from '../../../components/carousel/index.jsx';
import styled from "@emotion/styled";
import { BoldText, Container, Description, ImageWrapper, Notes, Links, Price, ProductTitle } from "../layout/index.jsx";

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

  &.image-0 {
    background-image: url('/assets/products/Ruckus/brake-light-relocation-adaptor/blra-00.jpg');
  }
  &.image-1 {
    background-image: url('/assets/products/Ruckus/brake-light-relocation-adaptor/blra-01.jpg');
  }

  &.image-2 {
    background-image: url('/assets/products/Ruckus/brake-light-relocation-adaptor/blra-02.jpg');
  }

  &.image-3 {
    background-image: url('/assets/products/Ruckus/brake-light-relocation-adaptor/blra-03.jpg');
  }

  &.image-4 {
    background-image: url('/assets/products/Ruckus/brake-light-relocation-adaptor/blra-04.jpg');
  }
  &.image-5 {
    background-image: url('/assets/products/Ruckus/brake-light-relocation-adaptor/blra-05.jpg');
  }
  &.image-6 {
    background-image: url('/assets/products/Ruckus/brake-light-relocation-adaptor/blra-06.jpg');
  }
  &.image-7 {
    background-image: url('/assets/products/Ruckus/brake-light-relocation-adaptor/blra-07.jpg');
  }
  &.image-8 {
    background-image: url('/assets/products/Ruckus/brake-light-relocation-adaptor/blra-08.jpg');
  }
`;


const BrakeLightRelocationAdaptor = ({
    images = []
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 9;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalImages]);

  return (
      <>
        <ProductTitle>Ruckus Brake Light Relocation Adaptor</ProductTitle>
        <Container>
        <ImageWrapper>
          <BackgroundImage
            className={`image-0 ${currentImage === 0 ? "visible" : ""}`}
          />
          <BackgroundImage
            className={`image-1 ${currentImage === 1 ? "visible" : ""}`}
          />
          <BackgroundImage
            className={`image-2 ${currentImage === 2 ? "visible" : ""}`}
          />
          <BackgroundImage
            className={`image-3 ${currentImage === 3 ? "visible" : ""}`}
          />
          <BackgroundImage
            className={`image-4 ${currentImage === 4 ? "visible" : ""}`}
          />
          <BackgroundImage
            className={`image-5 ${currentImage === 5 ? "visible" : ""}`}
          />
          <BackgroundImage
            className={`image-6 ${currentImage === 6 ? "visible" : ""}`}
          />
          <BackgroundImage
            className={`image-7 ${currentImage === 7 ? "visible" : ""}`}
          />
          <BackgroundImage
            className={`image-8 ${currentImage === 8 ? "visible" : ""}`}
          />
        </ImageWrapper>
        <Description>
          The Rev Render Ruckus Brake Light Relocation Adaptor allows you to remove the stock brake light from under
          the back of the seat to the back top frame bar. Te stock brake light is fairly hidden and can be completely
          covered up in certain circumstances. This will completely eliminate the possibility of having a hidden brake
          light which could cause traffic behind you to not realize that you have actually slowed down. Safety first...
          <p>
            If used in conjunction with the Rev Render single or double rear blinker mount adaptors you move all the
            taillight farther back and improves the visibility of them. Using all of these in along side of each other
            can also really enhance the look of your tail light setup as well as elevates your safety while riding.
          </p>
          <Notes>
            <BoldText>Note:</BoldText> This kit includes the Brake Light adaptor only. This was made to work with the
            stock Ruckus brake light but can be used with any light that has dimensions of 170mm x 33mm or smaller, mounts with
            screws, and has wires that exit the back center, just as the stock ones do.
          </Notes>
          <Price>
            <BoldText>Brake Light Adaptor:</BoldText> $30 (includes shipping)
          </Price>
        </Description>
      </Container>
    </>
  );
};

export default BrakeLightRelocationAdaptor;