import themeStore from '@/Components/UI/Design/color/themeStore';
import { TypographyList } from '../../../Atoms/Typography/Typography';

const getSpacingFromTheme = themeStore.getState().theme.spacing;

// Define the sizes for the FancyContent component
export const sizes = {
  sm: {
    fontSizeDescription: 'smText' as keyof typeof TypographyList,
    fontSizeTitle: 'content' as keyof typeof TypographyList,
    padding: getSpacingFromTheme.xs,
  },
  md: {
    fontSizeDescription: 'content' as keyof typeof TypographyList,
    fontSizeTitle: 'button' as keyof typeof TypographyList,
    padding: getSpacingFromTheme.sm,
  },
  lg: {
    fontSizeDescription: 'button' as keyof typeof TypographyList,
    fontSizeTitle: 'button' as keyof typeof TypographyList,
    padding: getSpacingFromTheme.md,
  },
};
