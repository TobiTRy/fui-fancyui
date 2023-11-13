import React from 'react';
import { styled } from 'styled-components';

import DateOutput from '../../Atoms/DateOutput/DateOutput';
import { spacingPx } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import FancyLine from '../../Atoms/FancyLine/FancyLine';

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
  }

  button:nth-child(3) {
    border-radius: 0 50px 50px 0;
    padding: ${spacingPx.sm};
  }
`;

// Define the styled component for the VRWrapper
const VRWrapper = styled.div`
  position: absolute;
  height: 100%;
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
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}
// Define the DateOutputFromTo component
export default function DateOutputFromTo({ whichIsSelecting, dateFrom, dateTo, handler, themeType, layer }: IDateOutputFromTo) {
  const swapTheme = (themeType === 'primary' ? 'secondary' : 'primary');

  // Define the click handler for the DateOutput component
  const handleClickOnDateOutput = (which: 'from' | 'to') => {
    handler && handler(which);
  };

  // Render the DateOutputFromTo component with the appropriate props
  return (
    <StyledDateOutputFromTo>
      <DateOutput
        themeType={themeType}
        layer={layer}
        date={dateFrom}
        isActive={whichIsSelecting === 'from' || whichIsSelecting === undefined}
        onClick={() => handleClickOnDateOutput('from')}
      />
      <VRWrapper>
        <FancyLine direction='vertical' themeType={swapTheme} thickness='2px' margin={'´${spacingPx.sm}´'} />
      </VRWrapper>
      <DateOutput
        themeType={themeType}
        layer={layer}
        date={dateTo ?? dateFrom}
        isActive={whichIsSelecting === 'to'}
        onClick={() => handleClickOnDateOutput('to')}
      />
    </StyledDateOutputFromTo>
  );
}
