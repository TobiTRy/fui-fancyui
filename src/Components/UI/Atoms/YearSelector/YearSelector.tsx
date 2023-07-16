import React, { useEffect, useState } from 'react';
import SVGChevronLeft from '../../SVGIcons/SVGChevronLeft';
import SVGChevronRight from '../../SVGIcons/SVGChevronRight';

import { StyledButton, StyledYearSelector } from './YearSelector.style';

// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
interface IYearSelector {
  selectedYear?: number;
  handler?: (change: number) => void;
}
export default function YearSelector({ selectedYear, handler }: IYearSelector) {
  const [pickedYear, setPickedYear] = useState<number>(new Date().getFullYear());

  // update the year and call the handler if the year changes
  const handleYearChange = (change: number) => {
    const calcCurrentYear = pickedYear + change;
    setPickedYear(calcCurrentYear);
    handler && handler(calcCurrentYear);
  };

  // update the year if the selected year changes and its present
  useEffect(() => {
    if (selectedYear) {
      setPickedYear(selectedYear);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear]);

  return (
    <StyledYearSelector>
      <StyledButton aria-label="a year back" onClick={() => handleYearChange(-1)}>{SVGChevronLeft}</StyledButton>
      <span tabIndex={0}>{pickedYear}</span>
      <StyledButton aria-label="one year forward" onClick={() => handleYearChange(1)}>{SVGChevronRight}</StyledButton>
    </StyledYearSelector>
  );
}
