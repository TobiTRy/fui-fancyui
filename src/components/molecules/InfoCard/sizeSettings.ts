import { themeStore } from '@/design/theme/themeStore';

const getTheme = themeStore.getState().theme;
export const sizesSettings = {
  sm: {
    borderRadius: getTheme.borderRadius.sm,
    paddingTopBottom: getTheme.spacing.sm,
    paddingLeftRight: getTheme.spacing.sm,
  },
  md: {
    borderRadius: getTheme.borderRadius.md,
    paddingTopBottom: getTheme.spacing.md,
    paddingLeftRight: getTheme.spacing.sm,
  },
  lg: {
    borderRadius: getTheme.borderRadius.lg,
    paddingTopBottom: getTheme.spacing.lg,
    paddingLeftRight: getTheme.spacing.md,
  },
};
