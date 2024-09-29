import { TglobalElementSizesWithFit, globalElementSizesWithFit } from '@/design/theme/globalSizes';

export const getSize = (sizeC: TglobalElementSizesWithFit | string) => {
  // Check if the sizeC is a percentage value
  if (typeof sizeC === 'string' && sizeC.endsWith('%')) return sizeC;

  // Return the sizeC from the config or default if not found
  return globalElementSizesWithFit[sizeC as TglobalElementSizesWithFit] || globalElementSizesWithFit['md'];
};
