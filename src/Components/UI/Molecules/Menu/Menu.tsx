import React from 'react';
import { MenuContainer, IconPlaceholder } from './Menu.style';
import { TLayer } from '../../Design/color/generateColorSteps';
import { TUiColorsType } from '../../Design/color/designColor';
import ListDivider from '../../Atoms/ListDivider/ListDivider';
import MenuItem  from '../../Atoms/MenuItem/MenueItem';

export interface MenuProps {
  isOpen?: boolean;
  layer?: TLayer;
  themeType?: keyof TUiColorsType;
}

export default function Menu(props: MenuProps) {
  const { isOpen = true, layer, themeType } = props;
  return (
    <>
      {isOpen && (
        <MenuContainer>
          <MenuItem tabIndex={0} label='Muuuhhh' icon={<>👤</>}>
          </MenuItem>
          <ListDivider />
          <MenuItem tabIndex={0} label='Muuusettingshhh' icon={<>⚙️</>}/>
          <ListDivider label='Hi List ffgfg' />
          <MenuItem tabIndex={0} label='Muuusettingshhh' icon={<>⚙️</>}/>
          <MenuItem tabIndex={0} label='Logout' icon={<>🚪</>}/>
          {/* <MenuItem data-value="logout">
            <IconPlaceholder>🚪</IconPlaceholder>
            Logout
          </MenuItem> */}
        </MenuContainer>
      )}
    </>
  );
}
