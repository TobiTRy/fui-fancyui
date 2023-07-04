import React, { useEffect } from 'react';
import styled from 'styled-components';
import { fontSize, uiColors } from '../../Design/design';
import SVGChevronLeft from '../../SVGIcons/SVGChevronLeft';
import SVGChevronRight from '../../SVGIcons/SVGChevronRight';

import { useYearSelectorState } from './YearSelector.state';

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




interface IYearSelector {
  selectedYear?: number;
  handler?: (change: number) => void;
}
export default function YearSelector({ selectedYear, handler }: IYearSelector) {
  const pickedYear = useYearSelectorState(state => state.selectedYear);
  const setPickedYear = useYearSelectorState(state => state.setSelectedYear);


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
  }, [selectedYear])

  return (
    <StyledYearSelector>
      <StyledButton onClick={() => handleYearChange(-1)}>{SVGChevronLeft}</StyledButton>
      <span>{pickedYear}</span>
      <StyledButton onClick={() => handleYearChange(1)}>{SVGChevronRight}</StyledButton>
    </StyledYearSelector>
  );
}
