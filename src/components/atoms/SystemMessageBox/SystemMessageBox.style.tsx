import { TSystemMessageBox } from './TSystemMessageBox.model';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { colorTransparencyCalculator } from '@/design/designFunctions/colorTransparencyCalculator';
import { themeStore } from '@/design/theme/themeStore';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { TTheme } from '@/types/TTheme';
import { adjustSystemMessageColor } from '@/utils/functions/adjustSystemMessageColor';
import { css, styled } from 'styled-components';

type TStyledSystemMessage = TStyledPrefixAndOmiter<TSystemMessageBox, 'children' | 'sizeC'>;

export const StyledStystemMessage = styled.aside<{ theme: TTheme } & TStyledSystemMessage>`
  border-width: 1px;
  align-items: center;
  transition: all 0.2s;
  padding: ${({ $padding }) => arrayToCssValues($padding, 'spacing')};
  margin: ${({ $margin }) => arrayToCssValues($margin, 'spacing')};
  position: relative;
  border-radius: ${({ $borderRadius }) => arrayToCssValues($borderRadius, 'borderRadius')};
  overflow: hidden;

  ${({ theme, $themeType = 'error', $layer = 0 }) => {
    const color = getBackgroundColor({ theme, $themeType, $layer: $layer });
    const isDarkTheme = themeStore((state) => state.isDarkTheme);

    return css`
      border-width: 1px;
      border-style: solid;
      background: hsla(from ${color} h s l / ${isDarkTheme ? '15%' : '3%'});
      color: ${adjustSystemMessageColor(color)};
      border-left: 4px solid;
      border-color: ${adjustSystemMessageColor(color)};
    `;
  }}

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => colorTransparencyCalculator(theme.color.primary['0'], 0.8)};
    z-index: -1;
  }

  ${({ $externalStyle }) => $externalStyle}
`;
