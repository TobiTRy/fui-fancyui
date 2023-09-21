import React from 'react';
import { styled } from 'styled-components';

import DateOutput from '../../Atoms/DateOutput/DateOutput';
import FancyVR from '../../Atoms/FancyVR/FancyVR';
import { spacingPx } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { getTextColor } from '../../Design/color/colorCalculatorForComponet';

// Define the styled component for the DateOutputFromTo component
const StyledDateOutputFromTo = styled.div<{ theme: TUiColorsType; $themeType?: keyof TUiColorsType; $layer?: TLayer }>`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-around;
  align-items: stretch;

  button:nth-child(1) {
    border-radius: 50px 0 0 50px;
    padding: ${spacingPx.sm};
    color: ${({ theme, $themeType = 'primary', $layer = 1 }) => getTextColor({ theme, $themeType, $textLayer: $layer })};
  }

  button:nth-child(3) {
    border-radius: 0 50px 50px 0;
    padding: ${spacingPx.sm};
    color: ${({ theme, $themeType = 'primary', $layer = 1 }) => getTextColor({ theme, $themeType, $textLayer: $layer })};
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
  // Define the click handler for the DateOutput component
  const handleClickOnDateOutput = (which: 'from' | 'to') => {
    handler && handler(which);
  };

  // Render the DateOutputFromTo component with the appropriate props
  return (
    <StyledDateOutputFromTo>
      <DateOutput
        date={dateFrom}
        isActive={whichIsSelecting === 'from' || whichIsSelecting === undefined}
        handler={() => handleClickOnDateOutput('from')}
      />
      <VRWrapper>
        <FancyVR $design="secondary" />
      </VRWrapper>
      <DateOutput date={dateTo ?? dateFrom} isActive={whichIsSelecting === 'to'} handler={() => handleClickOnDateOutput('to')} />
    </StyledDateOutputFromTo>
  );
}
