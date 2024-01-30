import { ComponentProps, ReactNode } from 'react';

import { TComponentSizes } from '@/types/TComponentSizes';

import { MenuItem } from '@/components/atoms/MenuItem';
import { FancyContent } from '@/components/molecules/FancyContent';

import { sizeSettings } from './sizeSettings';

type TFancyMenueItemProps = {
  label?: string;
  icon?: ReactNode;
  size?: TComponentSizes;
} & ComponentProps<typeof MenuItem>;
// --------------------------------------------------------------------------- //
// ---------- The FancyMenueItem is a template for a finished Item  ---------- //
// --------------------------------------------------------------------------- //
export default function FancyMenuItem(props: TFancyMenueItemProps) {
  const { label, icon, size = 'md', ...menuItemProps } = props;
  return (
    <MenuItem size={size} {...menuItemProps}>
      <FancyContent align="center">
        {label && (
          <FancyContent.Title fontVariant={sizeSettings[size].fontSizeTitle} fontWeight={'normal'}>
            {label}
          </FancyContent.Title>
        )}
        {icon && <FancyContent.Icon size={sizeSettings[size].iconSize}>{icon}</FancyContent.Icon>}
      </FancyContent>
    </MenuItem>
  );
}
