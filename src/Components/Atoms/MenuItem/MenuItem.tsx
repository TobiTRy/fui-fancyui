import React from 'react';

import { TThemeTypes } from '@/Components/UI/Interface/TUiColors';
import { TLayer } from '@/Components/UI/Interface/TLayer';
import { StyledMenuItem } from './MenuItem.style';

type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type HTMLAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

type MenueItemProps = {
  children?: React.ReactNode;
  themeType?: TThemeTypes;
  layer?: TLayer;
} & (HTMLButtonProps | HTMLAnchorProps);
// --------------------------------------------------------------------------- //
//A Empty Menue Item that only handles the style you can put everythin as childs//
// --------------------------------------------------------------------------- //
export default function MenuItem(props: MenueItemProps) {
  const { children, as, themeType, layer, ...HTMLProps } = props;

  return (
    <StyledMenuItem as={as} $themeType={themeType} $layer={layer} {...HTMLProps}>
      {children}
    </StyledMenuItem>
  );
}
