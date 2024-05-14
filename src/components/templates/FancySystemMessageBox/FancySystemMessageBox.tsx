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
        align={align ?? 'center'}
        justify={justify ?? 'flex-start'}
        gapBetweenText={gapBetweenText ?? '0px'}
        gapBetweenIcon={gapBetweenIcon ?? sizes[sizeC].gap}
      >
        {(icon || useFuiIcons) && (
          <FancyContent.Icon sizeC={sizes[sizeC].iconSize}> {useFuiIcons ? <Icon /> : icon}</FancyContent.Icon>
        )}
        {title && <FancyContent.Title fontVariant={sizes[sizeC].title}>{title}</FancyContent.Title>}
        {description && (
          <FancyContent.Description fontVariant={sizes[sizeC].descriptionSize}>{description}</FancyContent.Description>
        )}
      </FancyContent>
    </SystemMessageBox>
  );
}
