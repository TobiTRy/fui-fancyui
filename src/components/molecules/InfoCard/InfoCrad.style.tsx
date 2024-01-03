import { css } from 'styled-components';

import { TComponentSizes } from '@/types/TComponentSizes';
import themeStore from '@/design/theme/themeStore/themeStore';

const getTheme = themeStore.getState().theme;
const sizes = {
  sm: {
    borderRadius: getTheme.borderRadius.sm,
    padding: getTheme.spacing.sm,
  },
  md: {
    borderRadius: getTheme.borderRadius.md,
    padding: getTheme.spacing.md,
  },
  lg: {
    borderRadius: getTheme.borderRadius.lg,
    padding: getTheme.spacing.lg,
  },
};

export const generateInfoCardStyle = (size: TComponentSizes) => {
  return css`
    width: 100%;
    border-radius: ${sizes[size].borderRadius};
    padding: ${sizes[size].padding};
  `;
};
