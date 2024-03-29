import { FancyContent } from '@/components/molecules/FancyContent';

import { sizes } from './sizeSettings';
import { FancyBox } from '@/components/atoms/FancyBox';
import { TFancyInfoCardWithFancyBoxAndFlex } from './TFancyInfoCard.model';

// --------------------------------------------------------------------------- //
// ------- This is a Template for a Infocard with icon Title und desc. ------- //
// --------------------------------------------------------------------------- //
export default function FancyInfoCard(props: TFancyInfoCardWithFancyBoxAndFlex) {
  const {
    title,
    description,
    icon,
    sizeC = 'md',
    direction,
    align,
    justify,
    outlinedBackgroundStrength,
    ...infoCardProps
  } = props;

  return (
    <FancyBox {...infoCardProps} sizeC={sizeC} outlinedBackgroundStrength={outlinedBackgroundStrength || 0.3}>
      <FancyContent direction={direction} align={align || 'flex-start'} justify={justify || 'flex-start'}>
        {icon && <FancyContent.Icon sizeC={sizes[sizeC].iconSize}>{icon}</FancyContent.Icon>}
        {title && <FancyContent.Title fontVariant={sizes[sizeC].title}>{title}</FancyContent.Title>}
        {description && (
          <FancyContent.Description fontVariant={sizes[sizeC].descriptionSize}>{description}</FancyContent.Description>
        )}
      </FancyContent>
    </FancyBox>
  );
}
