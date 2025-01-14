'use client';

import { useEffect, useState } from 'react';

import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { YearInput } from '@/components/atoms/YearInput';
import { TYearSelectorWithHTMLAttributes } from '@/components/atoms/YearSelector/TYearSelector.model';
import { SVGChevronLeft } from '@/components/icons';
import { SVGChevronRight } from '@/components/icons';
import { SVGDesignCSS, StyledButton, StyledYearSelector } from './YearSelector.style';
import { sizeSettings } from './sizeSettings';

// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
export default function YearSelector(props: TYearSelectorWithHTMLAttributes) {
  const {
    selectedYear = new Date().getFullYear(),
    sizeC = 'md',
    themeType = 'primary',
    themeTypeSecondary = 'secondary',
    layer = 3,
    secondaryLayer = 0,
    borderRadius,
    minYear,
    maxYear,
    yearChangeHandler,
    ariaTextLeftArrow,
    ariaTextRightArrow,
    ...htmlProps
  } = props;

  const [selectedYearState, setSelectedYearState] = useState(selectedYear);

  // update the year and call the handler if the year changes
  const handleYearChange = (change: number) => {
    const calcCurrentYear = selectedYearState + change;
    // update the state
    setSelectedYearState(calcCurrentYear);
    yearChangeHandler?.(calcCurrentYear);
    // call the handler with a delay  to prevent multiple calls
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    setSelectedYearState(Number(value));
    yearChangeHandler?.(Number(value));
  };

  // update the state if the selectedYear changes
  useEffect(() => {
    setSelectedYearState(selectedYear);
  }, [selectedYear]);

  return (
    <StyledYearSelector
      $sizeC={sizeC}
      $borderRadius={borderRadius}
      $layer={layer}
      $themeType={themeType}
      {...htmlProps}
    >
      <StyledButton
        aria-label={ariaTextLeftArrow}
        onClick={() => handleYearChange(-1)}
        $themeType={themeTypeSecondary}
        $layer={secondaryLayer}
      >
        <FancySVGAtom isPassive={true} sizeC={sizeSettings[sizeC].iconSize} externalStyle={SVGDesignCSS}>
          <SVGChevronLeft />
        </FancySVGAtom>
      </StyledButton>
      <YearInput
        sizeC={sizeC}
        year={selectedYearState}
        themeType={themeTypeSecondary}
        onBlur={onBlurHandler}
        min={minYear}
        max={maxYear}
      />
      <StyledButton
        aria-label={ariaTextRightArrow}
        onClick={() => handleYearChange(1)}
        $themeType={themeTypeSecondary}
        $layer={secondaryLayer}
      >
        <FancySVGAtom isPassive={true} sizeC={sizeSettings[sizeC].iconSize} externalStyle={SVGDesignCSS}>
          <SVGChevronRight />
        </FancySVGAtom>
      </StyledButton>
    </StyledYearSelector>
  );
}
