import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 200px;
  margin: auto;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const CarouselItems = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

const CarouselItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  text-align: center;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

// Carousel component
const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + items.length) % items.length
        );
    };

    return (
        <CarouselContainer>
            <CarouselItems currentIndex={currentIndex}>
                {items.map((item, index) => (
                    <CarouselItem key={index}>
                        {typeof item === 'string' ? (
                            <img src={item} alt={`Slide ${index}`} style={{ width: '100%' }} />
                        ) : (
                            <div>{item}</div>
                        )}
                    </CarouselItem>
                ))}
            </CarouselItems>
            <Button className="left" onClick={prev}>
                ❮
            </Button>
            <Button className="right" onClick={next}>
                ❯
            </Button>
        </CarouselContainer>
    );
};

// Usage example
const App = () => {
    const carouselItems = [
        'https://siddhu.vercel.app/assets/meee-e66f7b45.png',
        'https://siddhu.vercel.app/assets/me1-926e0f32.jpg',
        'https://siddhu.vercel.app/assets/teckzite_logo-9f3dfb8c.jpeg',
    ];

    return (
        <div>
            <h1>Image Carousel</h1>
            <Carousel items={carouselItems} />
        </div>
    );
};

export default App;
