/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { css } from 'styled-components';

import { FancyContent } from '@/components/molecules/FancyContent';

import { TSpacingPosition } from './FancyChip.style';
import { generateSpacing } from '@/components/organisms/FancyChip/utils/generateSpacings';
import { TChipProps } from '@/components/molecules/Chip/Chip';
import { FancyPill } from '@/components/atoms/FancyPill';
import ChipDeleteButton from '@/components/organisms/FancyChip/Components/ChipDeleteButton/ChipDeleteButton';
import ChipImg from '@/components/organisms/FancyChip/Components/ChipImg/ChipImg';

export type TFancyChipProps = {
  label?: string;
  isActive?: boolean;
  icon?: React.ReactNode;
  image?: string;
  onDelete?: () => void;
  children?: React.ReactNode;
} & TChipProps;

// Define the Chip component
export default function FancyChip(props: TFancyChipProps) {
  const { label, onDelete, icon, image, size, isActive, children, externalStyle, ...HTMLAttributes } = {
    ...defaultProps,
    ...props,
  };

  // Define a function to calculate the spacing position for the chip


  // Calculate the spacing position for the chip

  // Render the Chip component with the appropriate props
  return (
    <FancyPill
      isActive={isActive}
      externalStyle={css`
        gap: 2px;
        ${externalStyle}
      `}
      {...HTMLAttributes}
    >
      {children}
    </FancyPill>
  );
}

// Define the default props for the Chip component
const defaultProps = {
  size: 'md' as const,
};

FancyChip.DeleteButton = ChipDeleteButton;
FancyChip.Img = ChipImg;
FancyChip.Content = FancyContent;
