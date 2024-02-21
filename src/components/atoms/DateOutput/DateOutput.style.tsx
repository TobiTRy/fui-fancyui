import { styled } from 'styled-components';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TDateOutput } from './TDateOutput.model';
import { TTheme } from '@/types/TTheme';
import { getBackgroundColor, getTextColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { globalElementsizes } from '@/design/theme/globalSizes';
import { sizeSettings } from './sizeSettings';

type TDateOutputButton = TStyledPrefixAndPicker<
  TDateOutput,
  'isActive' | 'themeType' | 'layer' | 'sizeC' | 'borderRadius'
>;
export const DateOutputButton = styled.button<TDateOutputButton & { theme: TTheme }>`
  text-align: center;
  width: 100%;
  background-color: ${({ theme, $isActive, $themeType = 'primary', $layer = 2 }) =>
    $isActive
      ? getBackgroundColor({ theme, $themeType, $layer: $layer ? $layer + 1 : 3 })
      : getBackgroundColor({ theme, $themeType, $layer: $layer ? $layer : 2 })};
  color: ${({ theme, $themeType = 'secondary', $layer = 1 }) =>
    getTextColor({ theme, $themeType, $textLayer: $layer, turnColorTheme: true })};
  border: none;
  cursor: pointer;
  height: ${({ $sizeC = 'md' }) => globalElementsizes[sizeSettings[$sizeC].height]};
  border-radius: ${({ theme, $borderRadius, $sizeC = 'md' }) =>
    $borderRadius ? theme.borderRadius[$borderRadius] : theme.borderRadius[sizeSettings[$sizeC].borderRadius]};
`;
