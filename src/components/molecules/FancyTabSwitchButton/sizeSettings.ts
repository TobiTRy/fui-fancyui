import { themeStore } from '@/design/theme/themeStore';
import { TTypography } from '@/types/TTypography';

const getSpacingFromTheme = themeStore.getState().theme.spacing;
export const tabSwitchItemSizes = {
  sm: {
    fontSize: 'smText' as TTypography,
    padding: getSpacingFromTheme.xs,
  },
  md: {
    fontSize: 'content' as TTypography,
    padding: getSpacingFromTheme.xs,
  },
  lg: {
    fontSize: 'button' as TTypography,
    padding: getSpacingFromTheme.sm,
  },
};
