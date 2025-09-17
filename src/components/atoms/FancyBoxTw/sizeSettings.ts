import { TSizeSettingsExtended } from '@/types/TSizeSettings';
import { TComponentSizesExtended } from '@/types/TComponentSizes';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

type TSizeObjTw = {
  padding: number;
  borderRadius: TBorderRadiusSizes;
};

/**
 * Size settings for FancyBoxTw using numbered Tailwind approach
 * Maps component sizes to padding numbers and border radius values
 */
export const sizeSettingsTw: TSizeSettingsExtended<TSizeObjTw> = {
  xxs: {
    padding: 2, // 4px spacing
    borderRadius: 'xs',
  },
  xs: {
    padding: 3, // 8px spacing
    borderRadius: 'xs',
  },
  sm: {
    padding: 4, // 12px spacing
    borderRadius: 'sm',
  },
  md: {
    padding: 5, // 16px spacing
    borderRadius: 'md',
  },
  lg: {
    padding: 6, // 24px spacing
    borderRadius: 'lg',
  },
  xl: {
    padding: 7, // 32px spacing
    borderRadius: 'xl',
  },
  xxl: {
    padding: 8, // 40px spacing
    borderRadius: 'xxl',
  },
  '3xl': {
    padding: 8,
    borderRadius: 'xxl',
  },
  '4xl': {
    padding: 8,
    borderRadius: 'xxl',
  },
  '5xl': {
    padding: 8,
    borderRadius: 'xxl',
  },
  '6xl': {
    padding: 8,
    borderRadius: 'xxl',
  },
  '7xl': {
    padding: 8,
    borderRadius: 'xxl',
  },
  '8xl': {
    padding: 8,
    borderRadius: 'xxl',
  },
};

/**
 * Get size settings for a specific component size
 *
 * @param sizeC Component size key
 * @returns Size configuration object with padding and borderRadius
 */
export function getSizeSettings(sizeC: TComponentSizesExtended): TSizeObjTw {
  return sizeSettingsTw[sizeC];
}

/**
 * Get padding number for a specific component size
 *
 * @param sizeC Component size key
 * @returns Padding number for use with getSpacingClass()
 */
export function getPaddingFromSizeSettings(sizeC: TComponentSizesExtended): number {
  return sizeSettingsTw[sizeC].padding;
}

/**
 * Get border radius for a specific component size
 *
 * @param sizeC Component size key
 * @returns Border radius key for use with getBorderRadiusClass()
 */
export function getBorderRadiusFromSizeSettings(sizeC: TComponentSizesExtended): TBorderRadiusSizes {
  return sizeSettingsTw[sizeC].borderRadius;
}
