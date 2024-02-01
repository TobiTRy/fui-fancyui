import { themeStore } from '@/design/theme/themeStore';
import { TTypographyElList } from '@/types/TTypographyElList';

const getSpacingFromTheme = themeStore.getState().theme.spacing;
export const tabSwitchItemSizes = {
  sm: {
    fontSize: 'smText' as TTypographyElList,
    padding: getSpacingFromTheme.xs,
  },
  md: {
    fontSize: 'content' as TTypographyElList,
    padding: getSpacingFromTheme.xs,
  },
  lg: {
    fontSize: 'button' as TTypographyElList,
    padding: getSpacingFromTheme.sm,
  },
};
