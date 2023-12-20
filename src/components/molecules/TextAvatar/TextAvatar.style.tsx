import { styled } from 'styled-components';

import { getBorderRadiusViaSize } from '@/design/designFunctions/getBorderRadiusViaSize';
import IStyledPrefixAndOmitter from '@/interface/IStyledPrefixAndOmiter.model';
import { TTheme } from '@/interface/TTheme';

import { getSize } from '@/components/molecules/TextAvatar/utils/getSize';
import { TTextAvatarProps } from '@/components/molecules/TextAvatar/TextAvatar.model';
import { getTextColor } from '@/design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';

// Styled placeholder component for the profile picture
type TPlaceholderProps = IStyledPrefixAndOmitter<TTextAvatarProps, 'text' | 'letterLength' | 'fontSizes'>;
export const Placeholder = styled.div<TPlaceholderProps & { theme: TTheme }>`
  border-radius: ${({ $rounded }) => $rounded && getBorderRadiusViaSize($rounded)};
  width: ${({ $size }) => getSize($size ?? 'md')};
  height: ${({ $size }) => getSize($size ?? 'md')};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $backgroundColor, theme, $layer, $themeType }) =>
    $backgroundColor ? $backgroundColor : theme.colors[$themeType ?? 'primary'][$layer ?? 2]};
  color: ${({ $color, theme, $layer = 1, $themeType = 'primary' }) =>
    getTextColor({ theme, $themeType, $textLayer: $layer, $customTextColor: $color, turnColorTheme: true })};
  font-size: 1.5em;
  aspect-ratio: 1/1;
  ${({ $externalStyle }) => $externalStyle}
`;
