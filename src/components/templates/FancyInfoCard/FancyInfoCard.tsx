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
    size = 'md',
    direction,
    align,
    justify,
    outlinedBackgroundStrength,
    ...infoCardProps
  } = props;

  return (
    <InfoCard {...infoCardProps} size={size} outlinedBackgroundStrength={outlinedBackgroundStrength || 0.3}>
      <FancyContent direction={direction} align={align || 'flex-start'} justify={justify || 'flex-start'}>
        {icon && <FancyContent.Icon size={sizes[size].iconSize}>{icon}</FancyContent.Icon>}
        {title && <FancyContent.Title fontVariant={sizes[size].title}>{title}</FancyContent.Title>}
        {description && (
          <FancyContent.Description fontVariant={sizes[size].descriptionSize}>{description}</FancyContent.Description>
        )}
      </FancyContent>
    </InfoCard>
  );
}
