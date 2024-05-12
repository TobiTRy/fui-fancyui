import { styled } from 'styled-components';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';

import { TColoredText } from './TColoredText.model';
import { TTheme } from '@/types/TTheme';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { simpleColorTransition } from '@/design/designFunctions/simpleColorTransition';

type TStyledItem = TStyledPrefixAndPicker<TColoredText, 'layer' | 'themeType' | 'hoverLayer' | 'externalStyle'>;
export const StyledItem = styled.span<TStyledItem & { theme: TTheme }>`
  * {
    color: ${({ theme, $themeType = 'secondary', $layer = 0 }) => getBackgroundColor({ theme, $themeType, $layer })};

    &:hover {
      color: ${({ theme, $themeType = 'secondary', $hoverLayer = 2 }) =>
        getBackgroundColor({ theme, $themeType, $layer: $hoverLayer })};
    }

    ${simpleColorTransition}

    ${({ $externalStyle }) => $externalStyle}
  }
`;
