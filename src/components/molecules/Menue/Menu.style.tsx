import { styled } from 'styled-components';

import { generateThemeForCard } from '@/design/designFunctions/generateThemeForCard';

import { TMenu } from './TMenu.model';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { TTheme } from '@/types/TTheme';

type StyledMenuProps = TStyledPrefixAndOmiter<TMenu> & { theme: TTheme };

export const MenuContainer = styled.div<StyledMenuProps>`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};
  ${({ theme, $themeType, $layer, $outlined, $outlinedBackgroundStrength }) =>
    generateThemeForCard({
      theme,
      $themeType: $themeType ?? 'primary',
      $layer: $layer ?? 2,
      $outlined,
      $outlinedBackgroundStrength: $outlinedBackgroundStrength ?? 1,
      $outlinedRemoveBorder: true,
    })}
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;
