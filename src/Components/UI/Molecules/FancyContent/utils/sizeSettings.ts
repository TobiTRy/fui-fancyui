import themeStore from '@/Components/UI/Design/color/themeStore';
import { TTypography } from '@/Components/UI/Interface/TTypography';

const getSpacingFromTheme = themeStore.getState().theme.spacing;

// Define the sizes for the FancyContent component
export const sizes = {
  sm: {
    fontSizeDescription: 'smText' as TTypography,
    fontSizeTitle: 'content' as TTypography,
    padding: getSpacingFromTheme.xs,
  },
  md: {
    fontSizeDescription: 'content' as TTypography,
    fontSizeTitle: 'button' as TTypography,
    padding: getSpacingFromTheme.sm,
  },
  lg: {
    fontSizeDescription: 'button' as TTypography,
    fontSizeTitle: 'button' as TTypography,
    padding: getSpacingFromTheme.md,
  },
};
