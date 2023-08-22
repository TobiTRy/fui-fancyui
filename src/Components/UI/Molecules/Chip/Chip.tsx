import React from 'react';
import SVGXCircle from '../../SVGIcons/SVGXCircle';
import ClipBoardIconCheck from '../../SVGIcons/SVGClipBoardIconChecked';

import Typography from '../../Atoms/Typography/Typography';
import { FancySVGAtom } from '../../Atoms/FancySVGAtom';
import { StyledChip, StyledXButton, TSpacingPosition, WrapperImage } from './Chip.style';

// Define the interface for the base chip props
interface IChipPropsBase {
  label: string;
  icon?: React.ReactNode;
  image?: string;
  onClick: () => void;
}

// Define the interface for the chip props with an X button
interface IChipPropsWithXButton extends IChipPropsBase {
  xButton: true;
  onDelete: () => void;
}

// Define the interface for the chip props without an X button
interface IChipPropsWithoutXButton extends IChipPropsBase {
  xButton?: false;
  onDelete?: never;
}

// Define the type for the chip props
type IChipProps = IChipPropsWithXButton | IChipPropsWithoutXButton;

// Define the Chip component
export default function Chip(props: IChipProps) {
  const { label, xButton, onDelete, icon, image, onClick } = props;

  // Define a function to calculate the spacing position for the chip
  const clacPosition = (): TSpacingPosition => {
    if (icon && xButton) return 'booth';
    if (image && xButton) return 'right';
    if (xButton) return 'booth';
    if (icon) return 'booth';
    return 'booth';
  };

  // Calculate the spacing position for the chip
  const getCalcPosition = clacPosition();

  // Render the Chip component with the appropriate props
  return (
    <StyledChip onClick={onClick} $spacingPosition={getCalcPosition}>
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

      <Typography type="smallText" variant="content">
        {label || 'Test'}
      </Typography>

      {xButton && (
        <StyledXButton onClick={onDelete}>
          <SVGXCircle />
        </StyledXButton>
      )}
    </StyledChip>
  );
}
