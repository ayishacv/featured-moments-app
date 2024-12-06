import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const CarouselContainer = styled.div`
  padding: 40px; /* Padding from the left side of the page */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const TitleDescription = styled.div`
  text-align: left;
`;

const CarouselRow = styled.div`
  display: flex;
  gap: 40px;
  overflow: hidden; /* Hide horizontal scrollbar */
  scroll-behavior: smooth; /* Smooth scrolling for arrows */
`;

const ArrowButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 50%;
  background: ${(props) => (props.disabled ? "#f0f0f0" : "white")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(props) => (props.disabled ? "#f0f0f0" : "#ddd")};
  }
`;

const Carousel = () => {
    const [cards, setCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null); // Reference for the carousel row

    useEffect(() => {
        const fetchCards = async () => {
            const response = await fetch("/api/cms");
            const data = await response.json();
            setCards(data.reverse()); // Reverse to show the latest images first
        };
        fetchCards();
    }, []);

    const scrollToCard = (direction) => {
        if (carouselRef.current) {
            const cardWidth = 440; // 400px width + 40px gap
            const scrollAmount = direction === "next" ? cardWidth : -cardWidth;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

            setCurrentIndex((prev) =>
                direction === "next"
                    ? Math.min(prev + 1, cards.length - 1)
                    : Math.max(prev - 1, 0)
            );
        }
    };

    return (
        <CarouselContainer>
            <Header>
                <TitleDescription>
                    <h1>Featured Moments</h1>
                    <p>Our experiences reflect our distinct ethos and core values...</p>
                </TitleDescription>
                <ArrowButtonContainer>
                    <ArrowButton
                        onClick={() => scrollToCard("prev")}
                        disabled={currentIndex === 0}
                    >
                        {"<"}
                    </ArrowButton>
                    <ArrowButton
                        onClick={() => scrollToCard("next")}
                        disabled={currentIndex >= cards.length - 1}
                    >
                        {">"}
                    </ArrowButton>
                </ArrowButtonContainer>
            </Header>

            <CarouselRow ref={carouselRef}>
                {cards.map((card, index) => (
                    <Card key={card.id} {...card} />
                ))}
            </CarouselRow>
        </CarouselContainer>
    );
};

export default Carousel;