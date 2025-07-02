'use client';

import { FancyContent } from '@/components/molecules/FancyContent';
import { TFancyInfoTextWithFancyBoxAndFlex } from './FancyInfoText.model';
import { sizes } from './sizeSettings';

export default function FancyInfoText(props: TFancyInfoTextWithFancyBoxAndFlex) {
  const { title, description, icon, sizeC = 'md', direction = 'row', themeType = 'error', layer } = props;

  return (
    <FancyContent themeType={themeType} layer={layer} layoutMode={direction === 'column' ? 'stack' : 'normal'}>
      {icon && <FancyContent.Icon sizeC={sizes[sizeC].iconSize}>{icon}</FancyContent.Icon>}
      {title && <FancyContent.Title fontVariant={sizes[sizeC].title}>{title}</FancyContent.Title>}
      {description && (
        <FancyContent.Description fontVariant={sizes[sizeC].descriptionSize}>{description}</FancyContent.Description>
      )}
    </FancyContent>
  );
}
