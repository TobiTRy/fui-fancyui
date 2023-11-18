import { css } from 'styled-components';

import { borderRadius } from '../../Design/designSizes';
import { TSizes } from '../../Interface/TComponentSizes';
import themeStore from '@/Components/UI/Design/color/themeStore';

const getSpacingFromTheme = themeStore.getState().theme.spacing;
const sizes = {
  sm: {
    borderRadius: borderRadius.sm,
    padding: getSpacingFromTheme.sm,
  },
  md: {
    borderRadius: borderRadius.md,
    padding: getSpacingFromTheme.md,
  },
  lg: {
    borderRadius: borderRadius.lg,
    padding: getSpacingFromTheme.lg,
  },
};

export const generateInfoCardStyle = (size: TSizes) => {
  return css`
    width: 100%;
    border-radius: ${sizes[size].borderRadius};
    padding: ${sizes[size].padding};
  `;
};
