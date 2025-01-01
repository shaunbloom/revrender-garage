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
    background-image: url('/assets/products/speedo-conversion-kit/sck-01.jpg');
  }

  &.image-2 {
    background-image: url('/assets/products/speedo-conversion-kit/sck-02.jpg');
  }

  &.image-3 {
    background-image: url('/assets/products/speedo-conversion-kit/sck-03.jpg');
  }

  &.image-4 {
    background-image: url('/assets/products/speedo-conversion-kit/sck-04.jpg');
  }

  &.image-5 {
    background-image: url('/assets/products/speedo-conversion-kit/sck-05.jpg');
  }

  &.image-6 {
    background-image: url('/assets/products/speedo-conversion-kit/sck-06.jpg');
  }

  &.image-7 {
    background-image: url('/assets/products/speedo-conversion-kit/sck-07.jpg');
  }
`;


const SpeedoConversion = ({
    images = []
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 7;

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
              <BackgroundImage
                className={`image-6 ${currentImage === 5 ? "visible" : ""}`}
              />
              <BackgroundImage
                className={`image-7 ${currentImage === 6 ? "visible" : ""}`}
              />
            </ImageWrapper>
            <Description>
              The Rev Render Speedometer Conversion Kit offers a custom option to replace a gauge cluster on a scooter.
              The speedometer that is used with this kit support a tach, mph, blinkers, high beam, gas gauge and gears
              (if you have them). The kit comes with an extension wire harness that works with a standard GY6 wire
              harness to map the 9 pin plug to the correct pins on the GY6 9 pin plug. We currently make 3 mounts that
               will work on any Maddog scooter (Gens 1, 4 & 5) with support for open or closed (has a
              cross bar) handlebars.

              <p>
                This kit will allow you to remove a gauge cluster and replace it with an 88mm digital speedometer which give
                a much more custom sleek look. This is kit is great to replace the three plastic fake chrome gauge
                cluster that are on a lot of the DAIX Chinese scooters, including the Gen 1 Maddogs. It also offer the
                ability to cover the Gen 4 Maddog speedometers and give them a sleek custom look while hiding the wires
                and mounting bolts. (Ruckus mounts coming soon.)

                <Notes>
                  <BoldText>Note:</BoldText> Speedometer is not include in the conversion kit. (Supporting 3rd party electronics is not
                  something we're willing to take on at this point.)
                </Notes>

                <Links>
                  <BoldText>Amazon Speedo Link:</BoldText> <a href="https://a.co/d/2VwNNYf" target="_blank">https://a.co/d/2VwNNYf</a>
                </Links>

                <Price>
                  <BoldText>Base Kit:</BoldText> $75
                </Price>

                <Price>
                  <BoldText>Full Custom Kit:</BoldText> $100 (Includes 2 tone speedo case and powder coated mount)
                </Price>
              </p>
            </Description>
        </Container>

      </>
  );
};

export default SpeedoConversion;