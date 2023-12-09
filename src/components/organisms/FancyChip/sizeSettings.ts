import { themeStore } from "@/design/theme/themeStore";

const getSpacingFromTheme = themeStore.getState().theme.spacing;
const spacings = {
  xs: parseFloat(getSpacingFromTheme.xs),
  sm: parseFloat(getSpacingFromTheme.sm),
  md: parseFloat(getSpacingFromTheme.md),
};


export const sizes = {
  sm: {
    height: '24px',
    deleteButtonSize: '14px',
    padding: spacings.xs,
    paddingRight: spacings.xs,
    paddingLeft: spacings.xs,
    icon: '14px',
  },
  md: {
    height: '32px',
    deleteButtonSize: '14px',
    padding: spacings.sm,
    paddingRight: spacings.sm,
    paddingLeft: spacings.sm,
    icon: '18px',
  },
  lg: {
    height: '38px',
    deleteButtonSize: '14px',
    padding: spacings.sm,
    paddingRight: spacings.sm,
    paddingLeft: spacings.md,
    icon: '20px',
  },
};