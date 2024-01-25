import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
import { TFancyLine, TFancyLineWithHTMLAttributes } from './TFancyLine.model';

// --------------------------------------------------------------------------- //
// ------------ A dynamic line (vertical/horizontal) for better UX/UI  ------- //
// --------------------------------------------------------------------------- //
export default function FancyLine(props: TFancyLineWithHTMLAttributes) {
  const { direction, thickness, margin, themeType, layer, ...htmlProps } = props;

  return (
    <StyledFancyLine
      $direction={direction ?? 'horizontal'}
      $thickness={thickness}
      $margin={margin}
      $themeType={themeType}
      $layer={layer}
      {...htmlProps}
    />
  );
}

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
type TStyledFancyLine = IStyledPrefixAndPicker<TFancyLine> & { theme?: TTheme };
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
