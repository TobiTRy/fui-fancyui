import React from 'react';

import InfoCard from '../../Molecules/InfoCard/InfoCard';
import FancyContent from '../../Molecules/FancyContent/FancyContent';
import { TypographyList } from '../../Atoms/Typography/Typography';

type TSizeObj = {
  iconSize: 'sm' | 'md' | 'lg';
  title: keyof typeof TypographyList;
  descriptionSize: keyof typeof TypographyList;
};

type TSizesObject = {
  [key: string]: TSizeObj;
};

const sizes: TSizesObject = {
  sm: {
    iconSize: 'sm',
    title: 'h6',
    descriptionSize: 'smText',
  },
  md: {
    iconSize: 'sm',
    title: 'h6',
    descriptionSize: 'smText',
  },
  lg: {
    iconSize: 'sm',
    title: 'h6',
    descriptionSize: 'smText',
  },
};

type TFancyInfoCardProps = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
} & React.ComponentProps<typeof InfoCard>;

export default function FancyInfoCard(props: TFancyInfoCardProps) {
  const { title, description, icon, size = 'md', ...infoCardProps } = props;

  return (
    <InfoCard {...infoCardProps} size={size}>
      <FancyContent flexAlign="flex-start" flexJustify="flex-start">
        {icon && <FancyContent.Icon size={sizes[size].iconSize}>{icon}</FancyContent.Icon>}
        {title && <FancyContent.Title fontVariant={size[size].title}>{title}</FancyContent.Title>}
        {description && <FancyContent.Description>{description}</FancyContent.Description>}
      </FancyContent>
    </InfoCard>
  );
}
