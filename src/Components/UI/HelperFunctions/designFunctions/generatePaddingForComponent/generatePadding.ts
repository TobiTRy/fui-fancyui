import { spacing } from '../../../Design/design';

export function generatePadding(offsetPx?: number, spacingLeftRightx2?: boolean) {
  const offset = offsetPx ? offsetPx : 0;

  const small = `${spacing.xs * 1.75 + offset}px` + (spacingLeftRightx2 ? ` ${spacing.xs * 3.5 + offset}px` : '');
  const md = `${spacing.sm * 1.25 + offset}px` + (spacingLeftRightx2 ? ` ${spacing.sm * 2.5 + offset}px` : '');
  const lg = `${spacing.sm * 1.5 + offset}px` + (spacingLeftRightx2 ? ` ${spacing.md * 2 + offset}px` : '');

  return { sm: small, md: md, lg: lg };
}
