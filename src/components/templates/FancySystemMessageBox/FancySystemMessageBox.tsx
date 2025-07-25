'use client';

import { FancyContent } from '@/components/molecules/FancyContent';
import { SystemMessageBox } from '@/components/atoms/SystemMessageBox';
import { TFancySystemMessageWithFancyContent } from './TFancySystemMessageBox.model';
import { sizes } from './sizeSettings';
import { getIcon } from './utils/SystemMessageIcon';

export default function FancySystemMessageBox(props: TFancySystemMessageWithFancyContent) {
  const {
    icon,
    layer,
    sizeC = 'sm',
    themeType = 'error',
    direction,
    justify,
    align,
    title,
    description,
    directionTextGroup,
    alignTextGroup,
    gapBetweenText,
    gapBetweenIcon,
    useFuiIcons = true,
  } = props;

  const Icon = getIcon(themeType);

  return (
    <SystemMessageBox themeType={themeType} layer={layer} sizeC={sizes[sizeC].systemMessageSize}>
      <FancyContent
        direction={direction ?? 'row'}
        directionTextGroup={directionTextGroup ?? 'column'}
        alignTextGroup={alignTextGroup}
        align={align ?? 'flex-start'}
        justify={justify ?? 'center'}
        gapBetweenText={gapBetweenText}
        gapBetweenIcon={gapBetweenIcon ?? '3xs'}
      >
        {(icon || useFuiIcons) && <FancyContent.Icon sizeC={sizeC}> {icon ?? <Icon />}</FancyContent.Icon>}
        {title && <FancyContent.Title sizeC={sizeC}>{title}</FancyContent.Title>}
        {description && <FancyContent.Description sizeC={sizeC}>{description}</FancyContent.Description>}
      </FancyContent>
    </SystemMessageBox>
  );
}
