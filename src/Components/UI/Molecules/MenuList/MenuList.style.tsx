import { styled } from 'styled-components';

import { MenuListProps } from './MenuList';
import IStyledPrefixAndOmitter from '../../Interface/IStyledPrefixAndOmiter.model';
import generateThemeForCard from '../../Design/designFunctions/generateThemeForCard/generateThemeForCard';
import { TTheme } from '@/Components/UI/Interface/TTheme';

type StyledMenuProps = IStyledPrefixAndOmitter<MenuListProps> & { theme: TTheme };

export const MenuContainer = styled.div<StyledMenuProps>`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  ${({ theme, $themeType, $layer, $outlined }) =>
    generateThemeForCard({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 2, $outlined, $outlinedBackgroundStrength: 1 })}
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;
