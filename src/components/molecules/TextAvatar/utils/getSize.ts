import { themeStore } from '@/design/theme/themeStore';
import { globalElementSizesWithFit } from '@/design/theme/globalSizes';
import { TglobalElementSizesWithFit } from '@/types/TglobalElementSizes';

export const getSize = (sizeC: TglobalElementSizesWithFit | string) => {
  const theme = themeStore.getState().theme.spacing;
  // Check if the sizeC is a percentage value
  if (typeof sizeC === 'string' && sizeC.endsWith('%')) return sizeC;
  const themeSize = sizeC as TglobalElementSizesWithFit;

  if (themeSize === 'fit') return '100%';

  // Return the sizeC from the config or default if not found
  return theme[themeSize] || globalElementSizesWithFit['md'];
};
