import React from 'react';
import { MenuContainer } from './Menu.style';
import { TLayer } from '../../Design/color/generateColorSteps';
import { TUiColorsType } from '../../Design/color/designColor';
import ListDivider from '../../Atoms/ListDivider/ListDivider';
import MenuItem from '../../Atoms/MenuItem/MenueItem';

export interface MenuProps {
  children?: React.ReactNode;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}

export default function Menu(props: MenuProps) {
  const { children } = props;
  return (
    <MenuContainer>
      <MenuItem as='a' tabIndex={0} label="Muuuhhh" icon={<>👤</>}></MenuItem>
      <ListDivider />
      <MenuItem tabIndex={0} label="Muuusettingshhh" icon={<>⚙️</>} />
      <ListDivider label="Hi List ffgfg" />
      <MenuItem tabIndex={0} label="Muuusettingshhh" icon={<>⚙️</>} />
      <MenuItem tabIndex={0} label="Logout" icon={<>🚪</>} />
    </MenuContainer>
  );
}




