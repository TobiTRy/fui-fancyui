import { FancyContent } from '@/components/molecules/FancyContent';
import { InfoCard } from '@/components/molecules/InfoCard';

import { TInfoCardProps } from '@/components/molecules/InfoCard/TInfoCard.model';
import { TFancyInfoCardProps } from '@/components/templates/FancyInfoCard/TFancyInfoCard.model';
import { sizes } from './sizeSettings';

// --------------------------------------------------------------------------- //
// ------- This is a Template for a Infocard with icon Title und desc. ------- //
// --------------------------------------------------------------------------- //
export default function FancyInfoCard(props: TFancyInfoCardProps & TInfoCardProps) {
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
    <InfoCard {...infoCardProps} sizeC={sizeC} outlinedBackgroundStrength={outlinedBackgroundStrength || 0.3}>
      <FancyContent direction={direction} align={align || 'flex-start'} justify={justify || 'flex-start'}>
        {icon && <FancyContent.Icon sizeC={sizes[sizeC].iconSize}>{icon}</FancyContent.Icon>}
        {title && <FancyContent.Title fontVariant={sizes[sizeC].title}>{title}</FancyContent.Title>}
        {description && (
          <FancyContent.Description fontVariant={sizes[sizeC].descriptionSize}>{description}</FancyContent.Description>
        )}
      </FancyContent>
    </InfoCard>
  );
}
