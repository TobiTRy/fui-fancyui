import styled, { css } from "styled-components";
import { simpleColorTransition } from "../../Design/simpleTransition";
import { borderRadius, spacing, spacingPx, uiColors } from "../../Design/design";

// Define the type for the spacing position
export type TSpacingPosition = 'left' | 'right' | 'booth';

// Define a function to generate the spacing based on the spacing position
export const GenerateSpacing = (spacingPosition?: TSpacingPosition) => {
  switch (spacingPosition) {
    case 'left':
      return css`
        padding-left: ${spacing.xs + 2 + 'px'};
      `;
    case 'right':
      return css`
        padding-right: ${spacing.xs + 2 + 'px'};
      `;
    case 'booth':
      return css`
        padding: 0 ${spacing.sm + 2 + 'px'};
      `;
    default:
      return null;
  }
};

// Define the styled component for the X button
export const StyledXButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${uiColors.secondary.light};
  background-color: transparent;
  padding: 0;
  line-height: 1;
  display: flex;
  align-items: center;
  margin-left: ${spacing.xs + 2 + 'px'};
  ${simpleColorTransition};

  &:hover {
    color: ${uiColors.secondary.main};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

// Define the styled component for the chip
export const StyledChip = styled.div<{ $spacingPosition?: TSpacingPosition }>`
  ${({ $spacingPosition }) => GenerateSpacing($spacingPosition)}
  border: none;
  cursor: pointer;
  display: flex;
  height: 32px;
  color: ${uiColors.secondary.main};
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  border-radius: ${borderRadius.xxxl};
  background-color: ${uiColors.accent.light};

  i {
    line-height: 0;
    margin-right: ${spacing.xs + 2 + 'px'};

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

// Define the styled component for the wrapper image
export const WrapperImage = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  line-height: 0;
  margin-right: ${spacingPx.xs};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;