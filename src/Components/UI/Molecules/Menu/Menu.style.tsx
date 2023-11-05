
import { styled } from 'styled-components';
import { TUiColorsType } from '../../Design/color/designColor';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import { borderRadius } from '../../Design/design';
import { MenuProps } from './Menu';

import IStyledPrefixAndOmitter from '../../Interface/IStyledPrefixAndOmiter.model';

type StyledMenuProps = IStyledPrefixAndOmitter<MenuProps, 'isOpen'> & {theme: TUiColorsType};

// Menu container
export const MenuContainer = styled.div<StyledMenuProps >`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  background-color: ${({theme, $themeType, $layer}) => getBackgroundColor({theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 2})};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: ${borderRadius.md};
`;

// Menu item
export const MenuItem = styled.div<StyledMenuProps>`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({theme, $themeType, $layer}) => getBackgroundColor({theme, $themeType: $themeType ??  'primary', $layer: $layer ?? 3})};
  }
`;

// Divider
export const MenuDivider = styled.div`
  height: 1px;
  background-color: #e0e0e0;
  margin: 8px 0;
`;

// Icon placeholder
export const IconPlaceholder = styled.span`
  margin-right: 8px;
`;

// You can customize your MenuTitle, MenuList, and other components as needed.
