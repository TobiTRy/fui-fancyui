import { globalElementSizes } from '@/design/theme/globalSizes';
import { TglobalElementSizes } from '@/types/TGlobalElementSizes';

// Define thickness mappings for each global size
const thicknessMap: Record<TglobalElementSizes, { thickness: string; thicknessInner: string }> = {
  xxs: {
    thickness: '1px',
    thicknessInner: '0.5px',
  },
  xs: {
    thickness: '1px',
    thicknessInner: '0.5px',
  },
  sm: {
    thickness: '1.5px',
    thicknessInner: '1px',
  },
  md: {
    thickness: '1.5px',
    thicknessInner: '1px',
  },
  lg: {
    thickness: '2px',
    thicknessInner: '1.5px',
  },
  xl: {
    thickness: '2px',
    thicknessInner: '1.5px',
  },
  xxl: {
    thickness: '2.5px',
    thicknessInner: '2px',
  },
  '3xl': {
    thickness: '3px',
    thicknessInner: '2.5px',
  },
  '4xl': {
    thickness: '3px',
    thicknessInner: '2.5px',
  },
  '5xl': {
    thickness: '3.5px',
    thicknessInner: '3px',
  },
  '6xl': {
    thickness: '4px',
    thicknessInner: '3.5px',
  },
  '7xl': {
    thickness: '4px',
    thicknessInner: '3.5px',
  },
  '8xl': {
    thickness: '4.5px',
    thicknessInner: '4px',
  },
};

// Generate sizes object using global element sizes and thickness mappings
export const sizes = Object.keys(globalElementSizes).reduce(
  (acc, sizeKey) => {
    const size = sizeKey as TglobalElementSizes;
    acc[size] = {
      width: globalElementSizes[size],
      thickness: thicknessMap[size].thickness,
      thicknessInner: thicknessMap[size].thicknessInner,
    };
    return acc;
  },
  {} as Record<TglobalElementSizes, { width: string; thickness: string; thicknessInner: string }>
);
