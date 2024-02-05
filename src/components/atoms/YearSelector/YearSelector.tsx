import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { Typography } from '@/components/atoms/Typography';
import { TYearSelector } from '@/components/atoms/YearSelector/TYearSelector.model';
import { SVGChevronLeft } from '@/components/icons/SVGChevronLeft';
import { SVGChevronRight } from '@/components/icons/SVGChevronRight';
import { SVGDesignCSS, StyledButton, StyledYearSelector } from './YearSelector.style';
import { useEffect, useState } from 'react';
import { setLastLetterPositionContentEditable } from '@/utils/functions/setLastLetterPositionContentEditable';
import useContentEditable from '@/utils/hooks/useContentEditable/useContentEditable';

// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
export default function YearSelector(props: TYearSelector) {
  const { selectedYear, themeType, layer, handler, ariaTextLeftArrow, ariaTextRightArrow } = props;

  const [selectedYearState, setSelectedYearState] = useState(selectedYear);
  const [textIsFocused, setTextIsFocused] = useState(false);

  const { ref, setValue, value } = useContentEditable<HTMLDivElement>({
    initialValue: 'Edit me',
    liveUpdate: false,
    allow: 'text',
  });

  // update the year and call the handler if the year changes
  const handleYearChange = (change: number) => {
    const calcCurrentYear = selectedYear + change;
    handler && handler(calcCurrentYear);
  };

  // update the state if the selectedYear changes
  useEffect(() => {
    setSelectedYearState(selectedYear);
  }, [selectedYear]);

  return (
    <StyledYearSelector $layer={layer} $themeType={themeType}>
      <StyledButton
        aria-label={ariaTextLeftArrow || 'a year back'}
        onClick={() => handleYearChange(-1)}
        $themeType={themeType}
        $layer={layer}
      >
        <FancySVGAtom isPassive={true} externalStyle={SVGDesignCSS}>
          {SVGChevronLeft}
        </FancySVGAtom>
      </StyledButton>

      <Typography elType="span" variant="interactiveMd" tabIndex={0}>
        {selectedYear}
      </Typography>
      <StyledButton
        aria-label={ariaTextRightArrow || 'one year forward'}
        onClick={() => handleYearChange(1)}
        $themeType={themeType}
        $layer={layer}
      >
        <FancySVGAtom isPassive={true} externalStyle={SVGDesignCSS}>
          {SVGChevronRight}
        </FancySVGAtom>
      </StyledButton>
    </StyledYearSelector>
  );
}
