import styled from '@emotion/styled';

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 600px; /* Set maximum width for the carousel */
  height: 300px; /* Set a fixed height */
  margin: auto;
  overflow: hidden;
  position: relative;
`;

export const CarouselContent = styled.div`
  display: flex;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
  transition: transform 0.5s ease-in-out;
`;

export const CarouselItem = styled.div`
  flex: 0 0 100%; /* Each item takes up full width of the carousel */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselImage = styled.img`
  max-width: 100%; /* Image scales to fit carousel width */
  max-height: 100%; /* Image scales to fit carousel height */
  object-fit: contain; /* Keeps the aspect ratio of the image */
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 2;

  ${({ direction }) => direction === 'left' && `left: 10px;`}
  ${({ direction }) => direction === 'right' && `right: 10px;`}
`;

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${({ active }) => (active ? 'black' : 'lightgray')};
  border: none;
  cursor: pointer;
`;