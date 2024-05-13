import { FancyContent } from '@/components/molecules/FancyContent';
import { SystemMessage } from '@/components/molecules/SystemMessage';
import { TFancySystemMessageWithFancyContent } from '@/components/templates/FancySystemMessage/FancySystemMessage.model';
import { sizes } from './sizeSettings';
import { getIcon } from './utils/SystemMessageIcon';

export default function FancySystemMessage(props: TFancySystemMessageWithFancyContent) {
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
    useFuiIcons = true,
  } = props;

  const Icon = getIcon(themeType);

  return (
    <SystemMessage themeType={themeType} sizeC={sizes[sizeC].systemMessageSize}>
      <FancyContent direction={direction} align={align || 'center'} justify={justify || 'flex-start'}>
        {icon ||
          (useFuiIcons && (
            <FancyContent.Icon sizeC={sizes[sizeC].iconSize}> {useFuiIcons ? <Icon /> : icon}</FancyContent.Icon>
          ))}
        {title && <FancyContent.Title fontVariant={sizes[sizeC].title}>{title}</FancyContent.Title>}
        {description && (
          <FancyContent.Description fontVariant={sizes[sizeC].descriptionSize}>{description}</FancyContent.Description>
        )}
      </FancyContent>
    </SystemMessage>
  );
}
