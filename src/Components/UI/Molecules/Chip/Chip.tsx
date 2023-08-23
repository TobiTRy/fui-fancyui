import React from 'react';
import SVGXCircle from '../../SVGIcons/SVGXCircle';
import ClipBoardIconCheck from '../../SVGIcons/SVGClipBoardIconChecked';

import Typography from '../../Atoms/Typography/Typography';
import { FancySVGAtom } from '../../Atoms/FancySVGAtom';
import { StyledChip, StyledXButton, TSpacingPosition, WrapperImage } from './Chip.style';
import { IChipProps } from './Chip.model';

// Define the Chip component
export default function Chip(props: IChipProps) {
  const { label, deleteButton, onDelete, icon, image, size } = { ...defaultProps, ...props };

  // Define a function to calculate the spacing position for the chip
  const clacPosition = (): TSpacingPosition => {
    if (icon && deleteButton) return 'booth';
    if (image && deleteButton) return 'right';
    if (image) return 'right';
    if (deleteButton) return 'booth';
    if (icon) return 'booth';
    return 'booth';
  };

  // Calculate the spacing position for the chip
  const getCalcPosition = clacPosition();

  // Render the Chip component with the appropriate props
  return (
    <StyledChip
      $spacingPosition={getCalcPosition}
      $size={size}
      role={props.onClick ? 'button' : undefined}
      tabIndex={props.onClick ? 0 : undefined}
      onClick={props.onClick}
      onKeyDown={(e) => {
        if (props.onClick && (e.key === 'Enter' || e.key === 'Space')) {
          e.preventDefault();
          props.onClick();
        }
      }}
    >
      {image && (
        <WrapperImage>
          <img src={image} alt="chip" />
        </WrapperImage>
      )}
      {icon && (
        <FancySVGAtom isPassive size="small">
          <ClipBoardIconCheck />
        </FancySVGAtom>
      )}

      <Typography type="smallText" variant={size === 'large' ? 'h5' : 'content'}>
        {label}
      </Typography>

      {deleteButton && (
        <StyledXButton
          $size={size}
          onClick={(e) => {
            e.stopPropagation();
            onDelete && onDelete();
          }}
        >
          <SVGXCircle />
        </StyledXButton>
      )}
    </StyledChip>
  );
}

// Define the default props for the Chip component
const defaultProps = {
  deleteButton: false,
  label: 'Test',
  onClick: () => {
    console.log('onClick');
  },
  onDelete: () => {
    console.log('onDelete');
  },
  icon: null,
  image: null,
};
