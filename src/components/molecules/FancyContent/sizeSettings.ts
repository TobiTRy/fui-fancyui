import themeStore from '@/design/theme/themeStore/themeStore';
import { TTypographyList } from '@/types/TTypographyList';

const getSpacingFromTheme = themeStore.getState().theme.spacing;

// Define the sizes for the FancyContent component
export const sizes = {
  sm: {
    fontSizeDescription: 'smText' as TTypographyList,
    fontSizeTitle: 'content' as TTypographyList,
    padding: getSpacingFromTheme.xs,
  },
  md: {
    fontSizeDescription: 'content' as TTypographyList,
    fontSizeTitle: 'button' as TTypographyList,
    padding: getSpacingFromTheme.sm,
  },
  lg: {
    fontSizeDescription: 'button' as TTypographyList,
    fontSizeTitle: 'h3' as TTypographyList,
    padding: getSpacingFromTheme.md,
  },
};
