import { SystemMessage } from '@/components/molecules/SystemMessage';
import { TFancySystemMessage, TFancySystemMessageWithFancyContent } from '@/components/templates/FancySystemMessage/FancySystemMessage.model';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { Typography } from '@/components/atoms/Typography';
import { FancyContent } from '@/components/molecules/FancyContent';
import { sizes } from './sizeSettings';

export default function FancySystemMessage(props: TFancySystemMessageWithFancyContent) {
  const { icon, layer, sizeC = 'sm', themeType = 'error',direction, justify, align, title, description } = props;

  return (
    <SystemMessage themeType={themeType} sizeC={sizes[sizeC].systemMessageSize}>
      <FancyContent direction={direction} align={align || 'center'} justify={justify || 'flex-start'} gapBetweenText={'0px'}>
        {icon && <FancyContent.Icon sizeC={sizes[sizeC].iconSize}>{icon}</FancyContent.Icon>}
        {title && <FancyContent.Title fontVariant={sizes[sizeC].title}>{title}</FancyContent.Title>}
        {description && (
          <FancyContent.Description fontVariant={sizes[sizeC].descriptionSize}>{description}</FancyContent.Description>
        )}
      </FancyContent>
    </SystemMessage>
  );
}
