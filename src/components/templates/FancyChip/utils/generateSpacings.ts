import { css } from 'styled-components';

import { sizesSettings } from '@/components/molecules/Chip/sizeSettings';

export type TSpacingPosition = 'left' | 'right' | 'booth';

// Define a function to generate the spacing based on the spacing position
interface IGenerateSpacing {
  spacingPosition?: TSpacingPosition;
  size?: keyof typeof sizesSettings;
}
export const generateSpacing = ({ spacingPosition, size }: IGenerateSpacing) => {
  const pickedSize = size ? size : 'md';

  switch (spacingPosition) {
    case 'left':
      return css`
        padding-left: ${sizesSettings[pickedSize].paddingLeft + 2 + 'px'};
      `;
    case 'right':
      return css`
        padding-right: ${sizesSettings[pickedSize].paddingRight + 2 + 'px'};
      `;
    case 'booth':
      return css`
        padding: 0 ${sizesSettings[pickedSize].padding + 2 + 'px'};
      `;
    default:
      return null;
  }
};
