import React from 'react';

import { TLayer } from '@/types/TLayer';
import { StyledMenuItem } from './MenuItem.style';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type HTMLAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

type MenueItemProps = {
  children?: React.ReactNode;
  themeType?: TThemeTypesNotTransparent;
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
