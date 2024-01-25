import { TLayer } from '@/types/TLayer';
import { SVGChevronLeft } from '@/components/icons/SVGChevronLeft';
import { SVGChevronRight } from '@/components/icons/SVGChevronRight';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { Typography } from '@/components/atoms/Typography';
import { SVGDesignCSS, StyledButton, StyledYearSelector } from './YearSelector.style';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
interface IYearSelector {
  selectedYear: number;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  handler?: (change: number) => void;
  ariaTextLeftArrow?: string;
  ariaTextRightArrow?: string;
}
export default function YearSelector(props: IYearSelector) {
  const { selectedYear, themeType, layer, handler, ariaTextLeftArrow, ariaTextRightArrow } = props;
  // update the year and call the handler if the year changes
  const handleYearChange = (change: number) => {
    const calcCurrentYear = selectedYear + change;
    handler && handler(calcCurrentYear);
  };

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
      <Typography type="content" variant="h3" tabIndex={0}>
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
