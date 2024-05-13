import { TSystemMessage } from '@/components/molecules/SystemMessage/TSystemMessage.model';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { themeStore } from '@/design/theme/themeStore';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { TTheme } from '@/types/TTheme';
import { css, styled } from 'styled-components';

// Styled Components
const sharedStyles = css`
  padding: 0.5rem 0.75rem;
  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  transition: all 0.2s;
`;

type TStyledSystemMessage = TStyledPrefixAndOmiter<TSystemMessage, 'children'>;

export const StyledStystemMessage = styled.div<{ theme: TTheme } & TStyledSystemMessage>`
  ${sharedStyles}
  border-radius: ${({ $borderRadius }) => arrayToCssValues($borderRadius, 'borderRadius')};
  padding: ${({ $padding }) => arrayToCssValues($padding, 'spacing')};
  margin: ${({ $margin }) => arrayToCssValues($margin, 'spacing')};

  @supports (color: rgb(from white r g b)) {
    ${({ theme, $themeType = 'error', $layer = 0 }) => {
      const color = getBackgroundColor({ theme, $themeType, $layer: $layer });
      const isDarkTheme = themeStore((state) => state.isDarkTheme);

      return css`
        border-color: oklch(from ${color} l c h / 25%);
        background: oklch(from ${color} calc(l * 1) c h / 20%);
        color: oklch(from ${color} calc(l * (${isDarkTheme ? 1.3 : 0.5})) c h);

        &::selection {
          background: oklch(from ${color} calc(l * 1.1) c h);
          color: oklch(from ${color} 1 c h);
        }
      `;
    }}
  }
`;
