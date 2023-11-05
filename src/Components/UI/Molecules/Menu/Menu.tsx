import React from 'react';
import { MenuContainer, MenuItem, MenuDivider, IconPlaceholder } from './Menu.style';
import { TLayer } from '../../Design/color/generateColorSteps';
import { TUiColorsType } from '../../Design/color/designColor';
import ListDivider from '../../Atoms/ListDivider/ListDivider';

export interface MenuProps {
  isOpen: boolean;
  layer?: TLayer;
  themeType?: keyof TUiColorsType;
}

export default function Menu(props: MenuProps) {
  const { isOpen, layer, themeType } = props;
  return (
    <>
      {isOpen && (
        <MenuContainer>
          <MenuItem data-value="profile" tabIndex={0}>
            <IconPlaceholder>👤</IconPlaceholder>
            Profile
          </MenuItem>
          <MenuItem data-value="settings">
            <IconPlaceholder>⚙️</IconPlaceholder>
            Settings
          </MenuItem>
          <ListDivider label='Hi List ffgfg  fgfg gfgfg' />
          <ListDivider />
          <MenuItem data-value="logout">
            <IconPlaceholder>🚪</IconPlaceholder>
            Logout
          </MenuItem>
        </MenuContainer>
      )}
    </>
  );
}
