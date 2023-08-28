import styled, { css } from 'styled-components';
import { simpleColorTransition } from '../../Design/simpleTransition';
import { borderRadius, spacing, spacingPx, uiColors } from '../../Design/design';

// Define the type for the spacing position
export type TSpacingPosition = 'left' | 'right' | 'booth';

export const sizes = {
  small: {
    height: '24px',
    deleteButtonSize: '14px',
    padding: spacing.xs,
    paddingRight: spacing.xs,
    paddingLeft: spacing.xs,
    icon: '16px',
  },
  medium: {
    height: '32px',
    deleteButtonSize: '14px',
    padding: spacing.sm,
    paddingRight: spacing.sm,
    paddingLeft: spacing.sm,
    icon: '18px',
  },
  large: {
    height: '38px',
    deleteButtonSize: '14px',
    padding: spacing.sm,
    paddingRight: spacing.sm,
    paddingLeft: spacing.md,
    icon: '20px',
  },
};

// Define a function to generate the spacing based on the spacing position
interface IGenerateSpacing {
  spacingPosition?: TSpacingPosition;
  size?: keyof typeof sizes;
}
export const GenerateSpacing = ({ spacingPosition, size }: IGenerateSpacing) => {
  const pickedSize = size ? size : 'medium';

  switch (spacingPosition) {
    case 'left':
      return css`
        padding-left: ${sizes[pickedSize].paddingLeft + 2 + 'px'};
      `;
    case 'right':
      return css`
        padding-right: ${sizes[pickedSize].paddingRight + 2 + 'px'};
      `;
    case 'booth':
      return css`
        padding: 0 ${sizes[pickedSize].padding + 2 + 'px'};
      `;
    default:
      return null;
  }
};

// Define the styled component for the chip
interface IStyledChip {
  $spacingPosition?: TSpacingPosition;
  $size?: keyof typeof sizes;
  $outlined?: boolean;
}
export const StyledChip = styled.div<IStyledChip>`
  ${({ $spacingPosition, $size }) => GenerateSpacing({ spacingPosition: $spacingPosition, size: $size })}
  border: none;
  height: ${({ $size }) => ($size ? sizes[$size].height : sizes.medium.height)};
  cursor: pointer;
  display: flex;
  color: ${uiColors.secondary.main};
  justify-content: space-between;
  align-items: center;
  line-height: 2;
  width: fit-content;
  border-radius: ${borderRadius.xxxl};

  ${({ $outlined }) =>
    $outlined
      ? css`
          border: 1px solid ${uiColors.primary.lightest};
        `
      : css`
          background-color: ${uiColors.primary.lightest};
        `};

  i {
    line-height: 0;
    margin-right: ${spacing.xs + 2 + 'px'};

    svg {
      width: ${({ $size }) => ($size ? sizes[$size].icon : sizes.medium.icon)};
      height: ${({ $size }) => ($size ? sizes[$size].icon : sizes.medium.icon)};
    }
  }
`;

// Define the styled component for the X button
export const StyledXButton = styled.button<{ $size?: keyof typeof sizes }>`
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
    width: ${({ $size }) => ($size ? sizes[$size].deleteButtonSize : sizes.medium.deleteButtonSize)};
    height: ${({ $size }) => ($size ? sizes[$size].deleteButtonSize : sizes.medium.deleteButtonSize)};
  }
`;

// Define the styled component for the wrapper image
export const WrapperImage = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  line-height: 0;
  margin-right: ${spacingPx.xs};
  display: flex;
  align-items: center;

  img {
    width: 95%;
    height: 95%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
