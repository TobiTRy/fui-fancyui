import { css } from 'styled-components';

import { TComponentSizes } from '@/types/TComponentSizes';
import { sizesSettings } from './sizeSettings';

export const generateInfoCardStyle = (size: TComponentSizes) => {
  return css`
    width: 100%;
    border-radius: ${sizesSettings[size].borderRadius};
    padding: ${sizesSettings[size].paddingTopBottom} ${sizesSettings[size].paddingLeftRight};
  `;
};
