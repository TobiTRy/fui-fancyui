import React from 'react';

import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { StyledMenuItem } from './MenuItem.style';

type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type HTMLAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

type MenueItemProps = {
  children?: React.ReactNode;
  themeType?: keyof TUiColorsType;
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