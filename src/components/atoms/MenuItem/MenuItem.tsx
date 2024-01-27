import React from 'react';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TComponentSizes } from '@/types/TComponentSizes';

import { StyledMenuItem } from './MenuItem.style';
import { sizeSettings } from './sizeSettings';

type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type HTMLAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

type MenueItemProps = {
  children?: React.ReactNode;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  size?: TComponentSizes;
  align?: TTextAlignLC;
} & (HTMLButtonProps | HTMLAnchorProps);
// --------------------------------------------------------------------------- //
//A Empty Menue Item that only handles the style you can put everythin as childs//
// --------------------------------------------------------------------------- //
export default function MenuItem(props: MenueItemProps) {
  const { children, as, themeType, layer, size = 'md', ...HTMLProps } = props;

  return (
    <StyledMenuItem as={as} $themeType={themeType} $layer={layer} $padding={sizeSettings[size].padding} {...HTMLProps}>
      {children}
    </StyledMenuItem>
  );
}
