import React from 'react';

import SVGChevronLeft from '../../icons/SVGChevronLeft/SVGChevronLeft';
import SVGChevronRight from '../../icons/SVGChevronRight/SVGChevronRight';
import { SVGDesignCSS, StyledButton, StyledYearSelector } from './YearSelector.style';
import Typography from '../Typography/Typography';
import { FancySVGAtom } from '../FancySVGAtom';
import { TThemeTypes } from '@/interface/TUiColors';
import { TLayer } from '@/interface/TLayer';

// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
interface IYearSelector {
  selectedYear: number;
  themeType?: TThemeTypes;
  layer?: TLayer;
  handler?: (change: number) => void;
}
export default function YearSelector({ selectedYear, handler, themeType, layer }: IYearSelector) {
  // update the year and call the handler if the year changes
  const handleYearChange = (change: number) => {
    const calcCurrentYear = selectedYear + change;
    handler && handler(calcCurrentYear);
  };

  return (
    <StyledYearSelector $layer={layer} $themeType={themeType}>
      <StyledButton aria-label="a year back" onClick={() => handleYearChange(-1)} $themeType={themeType} $layer={layer}>
        <FancySVGAtom isPassive={true} externalStyle={SVGDesignCSS}>
          {SVGChevronLeft}
        </FancySVGAtom>
      </StyledButton>
      <Typography type="content" variant="h3" tabIndex={0}>
        {selectedYear}
      </Typography>
      <StyledButton aria-label="one year forward" onClick={() => handleYearChange(1)} $themeType={themeType} $layer={layer}>
        <FancySVGAtom isPassive={true} externalStyle={SVGDesignCSS}>
          {SVGChevronRight}
        </FancySVGAtom>
      </StyledButton>
    </StyledYearSelector>
  );
}
