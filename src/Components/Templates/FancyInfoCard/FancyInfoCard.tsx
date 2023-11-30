import React from 'react';

import InfoCard from '../../molecules/InfoCard/InfoCard';
import FancyContent from '../../molecules/FancyContent/FancyContent';
import { TTypography } from '@/Components/Interface/TTypography';
import { TSizes } from '../../Interface/TComponentSizes';

type TSizeObj = {
  iconSize: TSizes;
  title: TTypography;
  descriptionSize: TTypography;
};

type TSizesObject = {
  [K in TSizes]: TSizeObj;
};

// the template for the sizes
const sizes: TSizesObject = {
  sm: {
    iconSize: 'md',
    title: 'h6',
    descriptionSize: 'smText',
  },
  md: {
    iconSize: 'lg',
    title: 'h5',
    descriptionSize: 'content',
  },
  lg: {
    iconSize: 'lg',
    title: 'h4',
    descriptionSize: 'button',
  },
};

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
