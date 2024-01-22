import { themeStore } from '@/design/theme/themeStore';
import { TTypographyList } from '@/types/TTypographyList';

const getSpacingFromTheme = themeStore.getState().theme.spacing;
export const tabSwitchItemSizes = {
  sm: {
    fontSize: 'smText' as TTypographyList,
    padding: getSpacingFromTheme.xs,
  },
  md: {
    fontSize: 'content' as TTypographyList,
    padding: getSpacingFromTheme.xs,
  },
  lg: {
    fontSize: 'button' as TTypographyList,
    padding: getSpacingFromTheme.sm,
  },
};
