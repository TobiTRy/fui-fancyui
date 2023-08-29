import { spacing } from '../../Design/design';

export function generatePadding(offsetValue?: number, secondValue?: boolean) {
  const offset = offsetValue ? offsetValue : 0;

  const small = `${spacing.xs * 1.75 + offset}px` + (secondValue ? ` ${spacing.xs * 2 + offset}px` : '');
  const md = `${spacing.sm * 1.25 + offset}px` + (secondValue ? ` ${spacing.sm * 2 + offset}px` : '');
  const lg = `${spacing.sm * 1.5 + offset}px` + (secondValue ? ` ${spacing.md * 2 + offset}px` : '');

  return { sm: small, md: md, lg: lg };
}
