'use client';

import { MenueItem } from '@/components/atoms/MenuItem';
import { FancyContent } from '@/components/molecules/FancyContent';

import { sizeSettings } from './sizeSettings';
import { TFancyMenueItemWithMenuAttrs } from './TFancyMenuItem.model';

// --------------------------------------------------------------------------- //
// ---------- The FancyMenueItem is a template for a finished Item  ---------- //
// --------------------------------------------------------------------------- //
export default function FancyMenueItem(props: TFancyMenueItemWithMenuAttrs) {
  const { label, icon, sizeC = 'lg', gapBetweenIcon = 'sm', themeTypeText, layerText, ...menuItemProps } = props;

  return (
    <MenueItem sizeC={sizeC} {...menuItemProps}>
      <FancyContent themeType={themeTypeText} layer={layerText} layoutMode="normal" gapBetweenIcon={gapBetweenIcon}>
        {label && (
          <FancyContent.Title fontVariant={sizeSettings[sizeC].fontSizeTitle} fontWeight={'normal'}>
            {label}
          </FancyContent.Title>
        )}
        {icon && (
          <FancyContent.Icon noPadding sizeC={sizeC === 'xs' ? 'sm' : sizeC === 'xl' ? 'lg' : sizeC}>
            {icon}
          </FancyContent.Icon>
        )}
      </FancyContent>
    </MenueItem>
  );
}
