'use client';

import { FancyContent } from '@/components/molecules/FancyContent';
import { TFancyInfoTextWithFancyBoxAndFlex } from './FancyInfoText.model';
import { sizes } from './sizeSettings';

export default function FancyInfoText(props: TFancyInfoTextWithFancyBoxAndFlex) {
  const {
    title,
    description,
    icon,
    justify = 'flex-start',
    sizeC = 'md',
    align = 'center',
    direction = 'row',
    themeType = 'error',
    directionTextGroup = 'row',
    alignTextGroup = 'flex-end',
    layer,
  } = props;

  return (
    <FancyContent
      themeType={themeType}
      layer={layer}
      direction={direction}
      directionTextGroup={directionTextGroup}
      align={align}
      alignTextGroup={alignTextGroup}
      justify={justify}
    >
      {icon && <FancyContent.Icon sizeC={sizes[sizeC].iconSize}>{icon}</FancyContent.Icon>}
      {title && <FancyContent.Title fontVariant={sizes[sizeC].title}>{title}</FancyContent.Title>}
      {description && (
        <FancyContent.Description fontVariant={sizes[sizeC].descriptionSize}>{description}</FancyContent.Description>
      )}
    </FancyContent>
  );
}
