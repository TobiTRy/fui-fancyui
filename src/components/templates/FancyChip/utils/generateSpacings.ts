import { css } from 'styled-components';

import { sizes } from '@/components/templates/FancyChip/sizeSettings';

export type TSpacingPosition = 'left' | 'right' | 'booth';

// Define a function to generate the spacing based on the spacing position
interface IGenerateSpacing {
  spacingPosition?: TSpacingPosition;
  size?: keyof typeof sizes;
}
export const generateSpacing = ({ spacingPosition, size }: IGenerateSpacing) => {
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
