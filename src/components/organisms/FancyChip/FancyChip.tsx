/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { css } from 'styled-components';

import { SVGXCircle } from '@/components/icons/SVGXCircle';
import { FancyContent } from '@/components/molecules/FancyContent';
import { Chip } from '@/components/molecules/Chip';
import { IChipProps } from '@/components/molecules/Chip/IChip.model';

import { StyledXButton, TSpacingPosition, WrapperImage } from './FancyChip.style';
import { generateSpacing } from '@/components/organisms/FancyChip/utils/generateSpacings';

export type TFancyChipProps = {
  label?: string;
  isActive?: boolean;
  icon?: React.ReactNode;
  image?: string;
  onDelete?: () => void;
} & IChipProps &
  React.HTMLAttributes<HTMLDivElement>;

// Define the Chip component
export default function FancyChip(props: TFancyChipProps) {
  const {
    label,
    onDelete,
    icon,
    image,
    size,
    isActive,
    externalStyle,
    ...HTMLAttributes
  } = {
    ...defaultProps,
    ...props,
  };

  // Define a function to calculate the spacing position for the chip
  const clacPosition = (): TSpacingPosition => {
    if (icon && onDelete) return 'booth';
    if (image && onDelete) return 'right';
    if (image) return 'right';
    if (onDelete) return 'booth';
    if (icon) return 'booth';
    return 'booth';
  };

  // Calculate the spacing position for the chip
  const getCalcPosition = clacPosition();
  3;

  // Render the Chip component with the appropriate props
  return (
    <Chip
      size={size}
      isActive={isActive}
      onClick={props.onClick}
      externalStyle={css`
        ${externalStyle}
        ${generateSpacing({ spacingPosition: getCalcPosition, size: size })}
      `}
      // {...HTMLAttributes}
    >
      {image && (
        <WrapperImage>
          <img src={image} alt="chip" />
        </WrapperImage>
      )}

      <FancyContent>
        {icon && <FancyContent.Icon size={size}>{icon}</FancyContent.Icon>}
        {label && (
          <FancyContent.Title size={size} bold={false}>
            {label}
          </FancyContent.Title>
        )}
      </FancyContent>

      {onDelete && (
        <StyledXButton
          aria-label="delete"
          $size={size}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            onDelete && onDelete();
          }}
        >
          <SVGXCircle />
        </StyledXButton>
      )}
    </Chip>
  );
}

// Define the default props for the Chip component
const defaultProps = {
  size: 'md' as const,
};
