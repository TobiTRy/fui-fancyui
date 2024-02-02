import { TTheme } from '@/types/TTheme';
import { TFancyLine } from '@/components/atoms/FancyLine';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
import { css, styled } from 'styled-components';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
type TStyledFancyLine = IStyledPrefixAndPicker<TFancyLine> & { theme?: TTheme };
export const StyledFancyLine = styled.hr<TStyledFancyLine>`
  background-color: ${({ theme, $themeType = 'accent', $layer }) => getBackgroundColor({ theme, $themeType, $layer })};
  display: block;
  border-radius: 2px;
  align-self: stretch;
  ${({ $direction, $thickness, $length }) =>
    calcHeightOrWidth({ direction: $direction, thickness: $thickness, length: $length })};
  border: 0;
  padding: 0;
  margin: ${({ $margin }) => arrayToCssValues($margin) || '0'};

  &::after {
    content: '';
    display: block;
    align-self: stretch;
    ${({ $direction, $thickness, $length }) =>
      calcHeightOrWidth({ direction: $direction, thickness: $thickness, length: $length })};
    background-color: ${({ theme, $themeType = 'accent', $layer }) =>
      getBackgroundColor({ theme, $themeType, $layer })};
    border: 0;
    padding: 0;
    filter: blur(0.5px);
  }
`;

type TcalcHeightOrWidth = {
  direction: TFancyLine['direction'];
  thickness?: string;
  length?: string;
};
const calcHeightOrWidth = (props: TcalcHeightOrWidth) => {
  const { direction, thickness, length } = props;

  switch (direction) {
    case 'vertical':
      return css`
        width: ${thickness || '1px'};
        height: ${length || '100%'};
      `;
    case 'horizontal':
      return css`
        width: ${length || '100%'};
        height: ${thickness || '1px'};
      `;
  }
};
