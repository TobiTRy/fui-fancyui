import { globalElementsizes } from '@/design/theme/globalSizes';
import { themeStore } from '@/design/theme/themeStore';

const theme = themeStore.getState().theme;
export const sizeSettings = {
  sm: {
    padding: `0 ${theme.spacing.md} 0 ${theme.spacing.xs}`,
    height: globalElementsizes.sm,
    borderRadius: theme.borderRadius.sm,
    gap: theme.spacing.xxs,
    iconSize: theme.spacing.md,
  },
  md: {
    padding: `0 ${theme.spacing.md} 0 ${theme.spacing.xs}`,
    height: globalElementsizes.md,
    borderRadius: theme.borderRadius.sm,
    gap: theme.spacing.xs,
    iconSize: '18px',
  },
  lg: {
    padding: `0 ${theme.spacing.md} 0 ${theme.spacing.xs}`,
    height: globalElementsizes.lg,
    borderRadius: theme.borderRadius.sm,
    gap: theme.spacing.xs,
    iconSize: '18px',
  },
};
