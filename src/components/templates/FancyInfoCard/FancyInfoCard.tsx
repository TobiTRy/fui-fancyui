import React from 'react';

import { InfoCard } from '@/components/molecules/InfoCard';
import { FancyContent } from '@/components/molecules/FancyContent';

import { sizes } from './sizeSettings';

type TFancyInfoCardProps = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
} & React.ComponentProps<typeof InfoCard>;
// --------------------------------------------------------------------------- //
// ------- This is a Template for a Infocard with icon Title und desc. ------- //
// --------------------------------------------------------------------------- //
export default function FancyInfoCard(props: TFancyInfoCardProps) {
  const { title, description, icon, size = 'md', ...infoCardProps } = props;

  return (
    <InfoCard {...infoCardProps} size={size}>
      <FancyContent flexAlign="flex-start" flexJustify="flex-start">
        {icon && <FancyContent.Icon size={sizes[size].iconSize}>{icon}</FancyContent.Icon>}
        {title && <FancyContent.Title fontVariant={sizes[size].title}>{title}</FancyContent.Title>}
        {description && <FancyContent.Description fontVariant={sizes[size].descriptionSize}>{description}</FancyContent.Description>}
      </FancyContent>
    </InfoCard>
  );
}
