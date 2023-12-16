import { css } from 'styled-components';
import { themeStore } from "@/design/theme/themeStore";
import { TComponentSizes } from "@/interface/TComponentSizes";

export type TSpacingPosition = 'left' | 'right' | 'booth';


const getSpacingFromTheme = themeStore.getState().theme.spacing;
const sizesSettings = {
  sm: {
    padding: getSpacingFromTheme.xs,
    paddingRight: getSpacingFromTheme.xxs,
    paddingLeft: getSpacingFromTheme.xs,
  },
  md: {
    padding: getSpacingFromTheme.sm,
    paddingRight: getSpacingFromTheme.xs,
    paddingLeft: getSpacingFromTheme.sm,
  },
  lg: {
    padding: getSpacingFromTheme.sm,
    paddingRight: getSpacingFromTheme.sm,
    paddingLeft: getSpacingFromTheme.md,
  },
}

// Define a function to generate the spacing based on the spacing position
interface IGenerateSpacing {
  spacingPosition?: TSpacingPosition;
  size?: TComponentSizes;
}
export const generateSpacing = ({ spacingPosition, size }: IGenerateSpacing) => {
  const pickedSize = size ? size : 'md';

  switch (spacingPosition) {
    case 'left':
      return css`
        padding-left: ${parseFloat(sizesSettings[pickedSize].paddingLeft) + 2 + 'px'};
      `;
    case 'right':
      return css`
        padding-right: ${parseFloat(sizesSettings[pickedSize].paddingRight) + 2 + 'px'};
      `;
    case 'booth':
      return css`
        padding: 0 ${parseFloat(sizesSettings[pickedSize].padding) + 2 + 'px'};
      `;
    default:
      return null;
  }
};
