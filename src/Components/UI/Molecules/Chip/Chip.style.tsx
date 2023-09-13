import styled, { css } from 'styled-components';
import { IUiColorsTypes, borderRadius, spacing, spacingPx } from '../../Design/design';
import themeStore from '../../Design/color/themeStore';
import { TUiColorsType } from '../../Design/color/designColor';

// Define the type for the spacing position
export type TSpacingPosition = 'left' | 'right' | 'booth';

export const sizes = {
  sm: {
    height: '24px',
    deleteButtonSize: '14px',
    padding: spacing.xs,
    paddingRight: spacing.xs,
    paddingLeft: spacing.xs,
    icon: '16px',
  },
  md: {
    height: '32px',
    deleteButtonSize: '14px',
    padding: spacing.sm,
    paddingRight: spacing.sm,
    paddingLeft: spacing.sm,
    icon: '18px',
  },
  lg: {
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
  const pickedSize = size ? size : 'md';

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

const generateTextColor = (color: IUiColorsTypes, outlined?: boolean, textColor?: IUiColorsTypes) => {
  const theme = themeStore.getState().theme;
  if (textColor) return theme[textColor][0];

  if (outlined) {
    return theme.secondary[0];
  } else {
    return theme[color].contrast;
  }
};

// Define the styled component for the chip
interface IStyledChip {
  $spacingPosition?: TSpacingPosition;
  $size?: keyof typeof sizes;
  $outlined?: boolean;
  $color?: IUiColorsTypes;
  $textColor?: IUiColorsTypes;
}
export const StyledChip = styled.div<IStyledChip  & { theme: TUiColorsType}>`
  ${({ $spacingPosition, $size }) => GenerateSpacing({ spacingPosition: $spacingPosition, size: $size })}
  border: none;
  height: ${({ $size }) => ($size ? sizes[$size].height : sizes.md.height)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 2;
  width: fit-content;
  border-radius: ${borderRadius.xxxl};

  ${({ $outlined, $color, $textColor, theme }) =>
    $outlined
      ? css`
          border: 1px solid ${theme[$color || 'primary'][7]};
          color: ${generateTextColor($color || 'primary', $outlined, $textColor)};
        `
      : css`
          color: ${generateTextColor($color || 'primary', $outlined, $textColor)};
          background-color: ${theme[$color || 'primary'][2]};
        `};

  /* the icon for the Chip */
  i {
    line-height: 0;
    margin-right: ${spacing.xs + 2 + 'px'};
    svg {
      width: ${({ $size }) => ($size ? sizes[$size].icon : sizes.md.icon)};
      height: ${({ $size }) => ($size ? sizes[$size].icon : sizes.md.icon)};
    }
  }
`;

// Define the styled component for the X button
export const StyledXButton = styled.button<{ $size?: keyof typeof sizes;}>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: inherit;
  background-color: transparent;
  padding: 0;
  line-height: 1;
  display: flex;
  align-items: center;
  margin-left: ${spacing.xs + 2 + 'px'};


  svg {
    width: ${({ $size }) => ($size ? sizes[$size].deleteButtonSize : sizes.md.deleteButtonSize)};
    height: ${({ $size }) => ($size ? sizes[$size].deleteButtonSize : sizes.md.deleteButtonSize)};
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
