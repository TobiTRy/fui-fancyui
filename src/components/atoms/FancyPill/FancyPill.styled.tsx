import styled, { css } from 'styled-components';

import { IFancyPill } from '@/components/atoms/FancyPill/FancyPill.model';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker.model';
import { TTheme } from '@/interface/TTheme';

import { generateThemeForCard } from '@/design/designFunctions/generateThemeForCard';
import { focusStyle } from '@/design/designFunctions/focusStyle';

type ISytledFancyPill = IStyledPrefixAndPicker<IFancyPill> & { theme: TTheme };
export const StyledFancyPill = styled.div<ISytledFancyPill>`
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;

  border-radius: ${({ theme }) => theme.borderRadius.complete};
  ${({ $themeType, theme, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateThemeForCard({ $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength })};

  &:focus {
    ${focusStyle}
  }

  ${({ $isActive }) => $isActive && focusStyle}
`;
