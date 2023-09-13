import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import DateOutput from '../../Atoms/DateOutput/DateOutput';
import FancyVR from '../../Atoms/FancyVR/FancyVR';
import { spacingPx } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';

// Define the styled component for the DateOutputFromTo component
const StyledDateOutputFromTo = styled.div<{ theme: TUiColorsType }>`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-around;
  align-items: stretch;

  button:nth-child(1) {
    border-radius: 50px 0 0 50px;
    color: ${({ theme }) => theme.secondary[0]};
    filter: brightness(1.25);
    padding: ${spacingPx.sm};
  }

  button:nth-child(3) {
    color: ${({ theme }) => theme.secondary[0]};
    filter: brightness(1.25);
    border-radius: 0 50px 50px 0;
    padding: ${spacingPx.sm};
  }
`;

// Define the styled component for the VRWrapper
const VRWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center; // this center the FancyVR vertically
`;

// Define the props for the DateOutputFromTo component
interface IDateOutputFromTo {
  dateFrom?: Date;
  dateTo?: Date;
  handler?: (wich: 'from' | 'to') => void;
  whichIsSelecting?: 'from' | 'to';
}

// Define the DateOutputFromTo component
export default function DateOutputFromTo({ whichIsSelecting, dateFrom, dateTo, handler }: IDateOutputFromTo) {
  const [currentlySelected, setCurrentlySelected] = useState<'from' | 'to'>('from');

  // Define the click handler for the DateOutput component
  const handleClickOnDateOutput = (which: 'from' | 'to') => {
    setCurrentlySelected(which);
    handler && handler(which);
  };

  // Update the currentlySelected state variable when the whichIsSelecting prop changes
  useEffect(() => {
    if (whichIsSelecting) {
      setCurrentlySelected(whichIsSelecting);
    }
  }, [whichIsSelecting]);

  // Render the DateOutputFromTo component with the appropriate props
  return (
    <StyledDateOutputFromTo>
      <DateOutput
        date={dateFrom}
        isActive={currentlySelected === 'from' || currentlySelected === undefined}
        handler={() => handleClickOnDateOutput('from')}
      />
      <VRWrapper>
        <FancyVR $design="secondary" />
      </VRWrapper>
      <DateOutput date={dateTo ?? dateFrom} isActive={currentlySelected === 'to'} handler={() => handleClickOnDateOutput('to')} />
    </StyledDateOutputFromTo>
  );
}