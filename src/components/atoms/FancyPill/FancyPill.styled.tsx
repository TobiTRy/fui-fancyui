import { css, styled } from 'styled-components';

import { IFancyPill } from '@/components/atoms/FancyPill/FancyPill.model';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker';
import { TTheme } from '@/interface/TTheme';

import { generateThemeForCard } from '@/design/designFunctions/generateThemeForCard';
import { focusStyle } from '@/design/designFunctions/focusStyle';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { clampLayer } from '@/utils/functions/clampLayer';

type ISytledFancyPill = IStyledPrefixAndPicker<IFancyPill> & { theme: TTheme };
export const StyledFancyPill = styled.div<ISytledFancyPill>`
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius.complete};
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateThemeForCard({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })};

  ${({ $isHoverable, theme, $themeType = 'primary', $layer = 1 }) =>
    //Generate hover style when isHoverable is true
    $isHoverable && generateHoverableStyle({ theme, $themeType, $layer })};

  transition: background-color 0.2s ease-in-out;

  &:focus {
    ${focusStyle}
  }

  ${({ $isActive }) => $isActive && focusStyle}
  ${({ $externalStyle }) => $externalStyle};
`;

// --------------------------------------------------------------------------- //
// -----------------  Generate Hover style its needed ------------------------ //
// --------------------------------------------------------------------------- //
type TGenerateHoverableStyle = {
  $themeType: IFancyPill['themeType'];
  $layer: IFancyPill['layer'];
  theme: TTheme;
};
const generateHoverableStyle = (props: TGenerateHoverableStyle) => {
  const { $themeType = 'primary', $layer = 1, theme } = props;
  return css`
    cursor: pointer;
    &:hover {
      background-color: ${getBackgroundColor({ theme, $themeType, $layer: clampLayer($layer + 1) })};
    }
  `;
};
