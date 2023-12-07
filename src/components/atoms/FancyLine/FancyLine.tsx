import { styled } from 'styled-components';

import { TLayer } from '@/interface/TLayer';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker.model';
import { TTheme } from '@/interface/TTheme';
import { TThemeTypes } from '@/interface/TThemeTypes';

type IFancyLine = {
  direction?: 'horizontal' | 'vertical';
  thickness?: string;
  margin?: string;
  themeType?: TThemeTypes;
  layer?: TLayer;
};
// --------------------------------------------------------------------------- //
// ------------ A dynamic line (vertical/horizontal) for better UX/UI  ------- //
// --------------------------------------------------------------------------- //
export default function FancyLine(props: IFancyLine) {
  const { direction, thickness, margin, themeType, layer } = props;
  return (
    <StyledFancyLine
      $direction={direction ?? 'horizontal'}
      $thickness={thickness}
      $margin={margin}
      $themeType={themeType}
      $layer={layer}
    />
  );
}

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
type TStyledFancyLine = IStyledPrefixAndPicker<IFancyLine> & { theme?: TTheme };
const StyledFancyLine = styled.hr<TStyledFancyLine>`
  background-color: ${({ theme, $themeType = 'accent', $layer }) => getBackgroundColor({ theme, $themeType, $layer })};
  display: block;
  width: ${({ $direction, $thickness }) => ($direction === 'vertical' ? $thickness || '1px' : '')};
  height: ${({ $direction, $thickness }) => ($direction === 'horizontal' ? $thickness || '1px' : '')};
  border-radius: 2px;
  align-self: stretch;
  border: 0;
  padding: 0;
  margin: ${({ $margin }) => $margin || '0'};

  &::after {
    content: '';
    display: block;
    align-self: stretch;
    width: ${({ $direction, $thickness }) => ($direction === 'vertical' ? $thickness || '1px' : '')};
    height: ${({ $direction, $thickness }) => ($direction === 'horizontal' ? $thickness || '1px' : '')};
    background-color: ${({ theme, $themeType = 'accent', $layer }) =>
      getBackgroundColor({ theme, $themeType, $layer })};
    border: 0;
    padding: 0;
    filter: blur(0.5px);
  }
`;
