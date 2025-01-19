import { styled } from 'styled-components';

import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TSystemMessage } from '@/components/atoms/SystemMessage/TSystemMassage.model';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { TTheme } from '@/types/TTheme';

type TSystemMessageWrapper = TStyledPrefixAndOmiter<TSystemMessage, 'children'>;
export const StyledSystemMessageWrapper = styled.span<
  TSystemMessageWrapper & { theme: TTheme; $fontVariant: keyof TTheme['fontSizes'] }
>`
  width: 100%;
  height: ${({ theme, $fontVariant }) => theme.fontSizes[$fontVariant].fontSize};
  line-height: 1;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  box-sizing: border-box;
  color: ${({ $systemMessageType, theme, $themeType = 'secondary', $layer = 0 }) => {
    return getBackgroundColor({ theme, $themeType: $systemMessageType ?? $themeType, $layer: $layer });
  }};
  ${({ $externalStyle }) => $externalStyle}

  & > * {
    display: block;
    height: ${({ theme, $fontVariant }) => theme.fontSizes[$fontVariant].fontSize};
  }
`;
