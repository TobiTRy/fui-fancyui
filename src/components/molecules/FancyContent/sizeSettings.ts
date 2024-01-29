import themeStore from '@/design/theme/themeStore/themeStore';
import { TTypographyList } from '@/types/TTypographyList';

const getSpacingFromTheme = themeStore.getState().theme.spacing;

// Define the sizes for the FancyContent component
export const sizes = {
  sm: {
    fontSizeDescription: 'smText' as TTypographyList,
    fontSizeTitle: 'caption' as TTypographyList,
    padding: getSpacingFromTheme.xs,
  },
  md: {
    fontSizeDescription: 'caption' as TTypographyList,
    fontSizeTitle: 'label' as TTypographyList,
    padding: getSpacingFromTheme.sm,
  },
  lg: {
    fontSizeDescription: 'h6' as TTypographyList,
    fontSizeTitle: 'h4' as TTypographyList,
    padding: getSpacingFromTheme.md,
  },
};
