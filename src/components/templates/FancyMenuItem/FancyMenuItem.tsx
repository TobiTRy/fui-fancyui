import { ComponentProps, ReactNode } from 'react';

import { TComponentSizes } from '@/types/TComponentSizes';

import { MenuItem } from '@/components/atoms/MenuItem';
import { FancyContent } from '@/components/molecules/FancyContent';

import { sizeSettings } from './sizeSettings';

type TFancyMenueItemProps = {
  label?: string;
  icon?: ReactNode;
  sizeC?: TComponentSizes;
} & ComponentProps<typeof MenuItem>;
// --------------------------------------------------------------------------- //
// ---------- The FancyMenueItem is a template for a finished Item  ---------- //
// --------------------------------------------------------------------------- //
export default function FancyMenuItem(props: TFancyMenueItemProps) {
  const { label, icon, sizeC = 'md', ...menuItemProps } = props;
  return (
    <MenuItem sizeC={sizeC} {...menuItemProps}>
      <FancyContent align="center">
        {label && (
          <FancyContent.Title fontVariant={sizeSettings[sizeC].fontSizeTitle} fontWeight={'normal'}>
            {label}
          </FancyContent.Title>
        )}
        {icon && <FancyContent.Icon sizeC={sizeSettings[sizeC].iconSize}>{icon}</FancyContent.Icon>}
      </FancyContent>
    </MenuItem>
  );
}
