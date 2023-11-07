
import { styled } from 'styled-components';
import { TUiColorsType } from '../../Design/color/designColor';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import { borderRadius } from '../../Design/design';
import { MenuProps } from './Menu';

import IStyledPrefixAndOmitter from '../../Interface/IStyledPrefixAndOmiter.model';

type StyledMenuProps = IStyledPrefixAndOmitter<MenuProps> & {theme: TUiColorsType};

// Menu container
export const MenuContainer = styled.div<StyledMenuProps>`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  background-color: ${({theme, $themeType, $layer}) => getBackgroundColor({theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 2})};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: ${borderRadius.md};
`;
