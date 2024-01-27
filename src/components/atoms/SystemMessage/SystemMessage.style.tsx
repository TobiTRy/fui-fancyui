import { styled } from 'styled-components';

import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TSystemMessage } from '@/components/atoms/SystemMessage/TSystemMassage.model';
import IStyledPrefixAndOmitter from '@/types/IStyledPrefixAndOmiter';
import { TTheme } from '@/types/TTheme';

type TSystemMessageWrapper = IStyledPrefixAndOmitter<TSystemMessage, 'children'>;
export const StyledSystemMessageWrapper = styled.span<TSystemMessageWrapper & { theme: TTheme }>`
  color: ${({ $systemMessageState, theme, $themeType = 'secondary', $layer = 0 }) => {
    return getBackgroundColor({ theme, $themeType: $systemMessageState ?? $themeType, $layer: $layer });
  }};
`;
