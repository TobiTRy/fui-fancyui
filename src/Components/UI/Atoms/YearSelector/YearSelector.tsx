import React, { useState } from 'react';
import styled from 'styled-components';
import { fontSize, uiColors } from '../../Design/design';

const StyledYearSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${uiColors.secondary.main};

  span {
   font-size: ${fontSize.large};
  }

`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${uiColors.secondary.main};
  border: none;
  padding: 0;
  cursor: pointer;
`;

const SVGArrowLeft = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
    <path
      stroke={uiColors.secondary.main}
      stroke-width="1"
      fill-rule="evenodd"
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
  </svg>
);

const SVGArrowRight = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
    <path
      stroke={uiColors.secondary.main}
      stroke-width="1"
      fill-rule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

interface IYearSelector {
  selectedYear?: number;
  handler?: (change: number) => void;
}
export default function YearSelector({ selectedYear, handler }: IYearSelector) {
  const [currentYear, setCurrentYear] = useState(selectedYear || new Date().getFullYear());

  const handleYearChange = (change: number) => {
    const calcCurrentYear = currentYear + change;
    setCurrentYear(calcCurrentYear);
    handler && handler(calcCurrentYear);
  };

  return (
    <StyledYearSelector>
      <StyledButton onClick={() => handleYearChange(-1)}>{SVGArrowLeft}</StyledButton>
      <span>{currentYear}</span>
      <StyledButton onClick={() => handleYearChange(1)}>{SVGArrowRight}</StyledButton>
    </StyledYearSelector>
  );
}
