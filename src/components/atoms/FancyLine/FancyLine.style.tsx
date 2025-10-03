import { TTheme } from '@/types/TTheme';
import { TFancyLine, TFadeDirection } from './TFancyLine.model';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { css, styled } from 'styled-components';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

// --- //
// ----- The style for the component --- //
// --- //

type TStyledFancyLine = TStyledPrefixAndPicker<TFancyLine> & { theme?: TTheme };
export const StyledFancyLine = styled.hr<TStyledFancyLine>`
  background-color: ${({ theme, $themeType = 'accent', $layer }) => getBackgroundColor({ theme, $themeType, $layer })};
  display: block;
  border-radius: 2px;
  ${({ $direction = 'horizontal', $thickness, $length }) =>
    calcHeightOrWidth({ direction: $direction, thickness: $thickness, length: $length })};
  border: 0;
  padding: 0;
  margin: ${({ $margin }) => arrayToCssValues($margin, 'spacing') || '0'};
  transition: background-color 0.25s ease;

  ${({ $fadingOut, $direction = 'horizontal', $fadeDirection = 'end' }) =>
    $fadingOut
      ? css`
          mask: ${getFadeMask($direction, $fadeDirection)};
          -webkit-mask: ${getFadeMask($direction, $fadeDirection)};
        `
      : css``}

  &::after {
    content: '';
    display: block;
    ${({ $direction = 'horizontal', $thickness, $length }) =>
      calcHeightOrWidth({ direction: $direction, thickness: $thickness, length: $length })};
    background-color: ${({ $systemMessageType, theme, $isActive, $themeType = 'secondary', $layer }) =>
      getBackgroundColor({
        theme,
        $themeType: $isActive ? ($systemMessageType ?? 'accent') : $themeType,
        $layer: $isActive ? 0 : $layer,
      })};
    border: 0;
    padding: 0;
    filter: blur(0.5px);
    transition: background-color 0.25s ease;
  }

  ${({ $externalStyle }) => $externalStyle};
`;

type TcalcHeightOrWidth = {
  direction: NonNullable<TFancyLine['direction']>;
  thickness?: string;
  length?: string;
};
const calcHeightOrWidth = (props: TcalcHeightOrWidth): ReturnType<typeof css> => {
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
    default:
      return css`
        width: ${length || '100%'};
        height: ${thickness || '1px'};
      `;
  }
};

const getFadeMask = (direction: TFancyLine['direction'], fadeDirection: TFadeDirection): string => {
  const isHorizontal = direction === 'horizontal';

  switch (fadeDirection) {
    case 'start':
      return isHorizontal
        ? 'linear-gradient(to right, transparent 0%, black 100%)'
        : 'linear-gradient(to bottom, transparent 0%, black 100%)';
    case 'end':
      return isHorizontal
        ? 'linear-gradient(to right, black 0%, transparent 100%)'
        : 'linear-gradient(to bottom, black 0%, transparent 100%)';
    case 'both':
      return isHorizontal
        ? 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)'
        : 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)';
    default:
      return isHorizontal
        ? 'linear-gradient(to right, black 0%, transparent 100%)'
        : 'linear-gradient(to bottom, black 0%, transparent 100%)';
  }
};
