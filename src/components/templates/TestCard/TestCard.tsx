import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  border-radius: 1.5rem; /* equivalent to 3xl in Tailwind */
  color: white;
`;

const ContentArea = styled.div`
  padding: 2rem 1.5rem; /* Adjust padding for mobile and larger screens */
  text-align: left;
`;

const Title = styled.h2`
  font-size: 1.125rem; /* equivalent to lg in Tailwind */
  font-weight: 500; /* medium */
  letter-spacing: tighter;
  margin-top: 0;
  margin-bottom: 0.5rem;

  @media (min-width: 1024px) {
    font-size: 1.875rem; /* equivalent to 3xl in Tailwind */
  }
`;

const Description = styled.p`
  font-size: 0.875rem; /* equivalent to sm in Tailwind */
  color: #f5f5f5; /* gray-100 in Tailwind */
  margin-top: 0.5rem;
`;

const PricingArea = styled.div`
  margin-top: 1.5rem;
  font-size: 3.125rem; /* equivalent to 5xl in Tailwind */
  font-weight: 300; /* light */
`;

const Price = styled.span``;

const Frequency = styled.span`
  font-size: 1rem; /* base font size */
  font-weight: 500; /* medium */
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.625rem 1.5rem;
  text-align: center;
  background-color: white;
  color: black;
  border: 2px solid white;
  border-radius: 9999px; /* full rounded */
  text-decoration: none;
  font-size: 0.875rem;
  margin: 1.5rem 1.5rem 0;
  transition:
    background-color 200ms,
    border-color 200ms,
    color 200ms;

  &:hover {
    background-color: transparent;
    border-color: white;
    color: white;
  }

  &:focus-visible {
    outline: none;
  }
`;

const Card: React.FC = () => {
  return (
    <CardContainer>
      <ContentArea>
        <div>
          <Title>Corporate</Title>
          <Description>Grow steadily and pizza.</Description>
        </div>
        <PricingArea>
          <Price>$35</Price>
          <Frequency> /mo</Frequency>
        </PricingArea>
      </ContentArea>
      <CTAButton href="#" aria-describedby="tier-starter">
        Get started
      </CTAButton>
    </CardContainer>
  );
};

export default Card;
