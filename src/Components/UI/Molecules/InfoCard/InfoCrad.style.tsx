import { css } from 'styled-components';

import { borderRadius, spacingPx } from '../../Design/design';
import { TSizes } from '../../Interface/TComponentSizes';

const sizes = {
  sm: {
    borderRadius: borderRadius.sm,
    padding: spacingPx.sm,
  },
  md: {
    borderRadius: borderRadius.md,
    padding: spacingPx.md,
  },
  lg: {
    borderRadius: borderRadius.lg,
    padding: spacingPx.lg,
  },
};

export const generateInfoCardStyle = (size: TSizes) => {
  return css`
    width: 100%;
    border-radius: ${sizes[size].borderRadius};
    padding: ${sizes[size].padding};
  `;
};
