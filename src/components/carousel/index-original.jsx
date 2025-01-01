import React, { useState } from 'react';
import { Button, DotsWrapper, Dot, CarouselWrapper, CarouselContent, CarouselItem } from "./layout/index.jsx";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselWrapper>
      <Button direction="left" onClick={prevSlide}>
        ◀
      </Button>
      <CarouselContent currentIndex={currentIndex}>
        {items.map((item, index) => (
          <CarouselItem key={index}>{item}</CarouselItem>
        ))}
      </CarouselContent>
      <Button direction="right" onClick={nextSlide}>
        ▶
      </Button>
      <DotsWrapper>
        {items.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsWrapper>
    </CarouselWrapper>
  );
};

export default Carousel;
