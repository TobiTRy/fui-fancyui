import { styled } from 'styled-components';
import { TUiColorsType } from '../../Design/color/designColor';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import { borderRadius } from '../../Design/designSizes';
import { MenuListProps } from './MenuList';

import IStyledPrefixAndOmitter from '../../Interface/IStyledPrefixAndOmiter.model';
import generateThemeForCard from '../../HelperFunctions/designFunctions/generateThemeForCard/generateThemeForCard';

type StyledMenuProps = IStyledPrefixAndOmitter<MenuListProps> & { theme: TUiColorsType };

export const MenuContainer = styled.div<StyledMenuProps>`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  ${({ theme, $themeType, $layer, $outlined }) =>
    generateThemeForCard({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 2, $outlined })}
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: ${borderRadius.md};
`;
