import { css, styled } from 'styled-components';
import { simpleColorTransition } from '@/design/designFunctions/simpleColorTransition';
import { TTheme } from '@/types/TTheme';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';

import { TFancyAWrapper } from './TFancyAWrapper.model';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

type TStyledA = TStyledPrefixAndPicker<TFancyAWrapper>;
export const FancyAWrapperStyle = styled.div<TStyledA & { theme: TTheme }>`
  a {
    color: ${({ theme, $themeType = 'secondary', $layer, $isActive }) =>
      getBackgroundColor({ theme, $themeType: $isActive ? 'accent' : $themeType, $layer })};
    ${simpleColorTransition};

    ${(props) => props.$isHoverable && generateHoverStyles(props)}
  }

  ${({ $externalStyle }) => $externalStyle}
`;

// generateHoverStyles
const generateHoverStyles = (props: TStyledA & { theme: TTheme }) => {
  const { theme, $layer } = props;
  return css`
    &:hover {
      color: ${getBackgroundColor({ theme, $themeType: 'accent', $layer })};
    }
  `;
};
