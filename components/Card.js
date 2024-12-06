import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 400px;
  height: 427px;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  width: 400px;
  height: 280px;
`;

const CardTitle = styled.h2`
  font-family: "Cabinet Grotesk", sans-serif;
  font-size: 24px;
  margin: 24px 0 0; /* 24px distance below the image */
`;

const CardDescription = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  color: #666;
  margin: 24px 0 0; /* 24px distance below the title */
  line-height: 1.5; /* Adjust line height for proper spacing */
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; /* Add ellipsis for overflowing content */
`;

const Card = ({ title, description, image }) => (
    <CardContainer>
        <CardImage src={image} alt={title} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
    </CardContainer>
);

export default Card;