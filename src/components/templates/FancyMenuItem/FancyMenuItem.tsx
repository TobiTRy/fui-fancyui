'use client';

import { MenueItem } from '@/components/atoms/MenuItem';
import { FancyContent } from '@/components/molecules/FancyContent';

import { sizeSettings } from './sizeSettings';
import { TFancyMenueItemWithMenuAttrs } from './TFancyMenuItem.model';

// --------------------------------------------------------------------------- //
// ---------- The FancyMenueItem is a template for a finished Item  ---------- //
// --------------------------------------------------------------------------- //
export default function FancyMenueItem(props: TFancyMenueItemWithMenuAttrs) {
  const { label, icon, sizeC = 'sm', gapBetweenIcon = 'sm', ...menuItemProps } = props;

  return (
    <MenueItem sizeC={sizeC} {...menuItemProps}>
      <FancyContent align="center" gapBetweenIcon={gapBetweenIcon}>
        {label && (
          <FancyContent.Title fontVariant={sizeSettings[sizeC].fontSizeTitle} fontWeight={'normal'}>
            {label}
          </FancyContent.Title>
        )}
        {icon && <FancyContent.Icon sizeC={sizeSettings[sizeC].iconSize}>{icon}</FancyContent.Icon>}
      </FancyContent>
    </MenueItem>
  );
}
