'use client';

import { FancyContent, FancyContentNormalTw } from '@/components/molecules/FancyContent';
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
    title,
    description,
    gapBetweenText,
    gapBetweenIcon,
    useFuiIcons = true,
  } = props;

  const Icon = getIcon(themeType);

  return (
    <SystemMessageBox themeType={themeType} layer={layer} sizeC={sizes[sizeC].systemMessageSize}>
      <FancyContentNormalTw sizeC={sizes[sizeC].contentSize}>
        <FancyContentNormalTw.Icon> {icon ?? <Icon />}</FancyContentNormalTw.Icon>
        <FancyContentNormalTw.Title>{title}</FancyContentNormalTw.Title>
        <FancyContentNormalTw.Description>{description}</FancyContentNormalTw.Description>
      </FancyContentNormalTw>
    </SystemMessageBox>
  );
}
