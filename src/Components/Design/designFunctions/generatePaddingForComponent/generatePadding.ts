import themeStore from '@/Components/Design/color/themeStore/themeStore';

export function generatePadding(offsetPx?: number, spacingLeftRightx2?: boolean) {
  const offset = offsetPx ? offsetPx : 0;
  const getSpacingFromTheme = themeStore.getState().theme.spacing;

  const small =
    `${parseFloat(getSpacingFromTheme.xs) * 1.75 + offset}px` +
    (spacingLeftRightx2 ? ` ${parseFloat(getSpacingFromTheme.xs) * 3.5 + offset}px` : '');
  const md =
    `${parseFloat(getSpacingFromTheme.sm) * 1.25 + offset}px` +
    (spacingLeftRightx2 ? ` ${parseFloat(getSpacingFromTheme.sm) * 2.5 + offset}px` : '');
  const lg =
    `${parseFloat(getSpacingFromTheme.sm) * 1.5 + offset}px` +
    (spacingLeftRightx2 ? ` ${parseFloat(getSpacingFromTheme.md) * 2 + offset}px` : '');

  return { sm: small, md: md, lg: lg };
}
