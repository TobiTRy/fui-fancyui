import { themeStore } from '@/design/theme/themeStore';

export function generatePadding(offsetPx?: number, spacingLeftRightx2?: boolean) {
  const offset = offsetPx ? offsetPx : 0;
  const getSpacingFromTheme = themeStore.getState().theme.spacing;

  const sm =
    `${parseFloat(getSpacingFromTheme.xs) + offset}px` +
    (spacingLeftRightx2 ? ` ${parseFloat(getSpacingFromTheme.xs) * 2 + offset}px` : '');
  const md =
    `${parseFloat(getSpacingFromTheme.sm) + offset}px` +
    (spacingLeftRightx2 ? ` ${parseFloat(getSpacingFromTheme.sm) * 2 + offset}px` : '');
  const lg =
    `${parseFloat(getSpacingFromTheme.md) + offset}px` +
    (spacingLeftRightx2 ? ` ${parseFloat(getSpacingFromTheme.md) * 2 + offset}px` : '');

  return { sm, md, lg };
}
