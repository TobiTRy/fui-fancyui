import { spacingPx } from '../../../Design/design';

export function generatePadding(offsetPx?: number, spacingLeftRightx2?: boolean) {
  const offset = offsetPx ? offsetPx : 0;

  const small =
    `${parseFloat(spacingPx.xs) * 1.75 + offset}px` + (spacingLeftRightx2 ? ` ${parseFloat(spacingPx.xs) * 3.5 + offset}px` : '');
  const md = `${parseFloat(spacingPx.sm) * 1.25 + offset}px` + (spacingLeftRightx2 ? ` ${parseFloat(spacingPx.sm) * 2.5 + offset}px` : '');
  const lg = `${parseFloat(spacingPx.sm) * 1.5 + offset}px` + (spacingLeftRightx2 ? ` ${parseFloat(spacingPx.md) * 2 + offset}px` : '');

  return { sm: small, md: md, lg: lg };
}
