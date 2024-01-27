import { spacingPx } from '../design/theme/designSizes';

export type TSpacings = keyof typeof spacingPx;

export type TSpacingArray = [TSpacings?, TSpacings?, TSpacings?, TSpacings?];
