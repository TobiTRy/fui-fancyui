// Set sizeC based on prop
export type TSize = 'sm' | 'md' | 'lg' | 'xxs' | 'xs' | 'xl' | 'xxl' | 'complete';
const sizeConfig: Record<TSize | string, string> = {
  xxs: '16px',
  xs: '24px',
  sm: '32px',
  md: '40px',
  lg: '48px',
  xl: '56px',
  xxl: '64px',
  complete: '100%',
  default: '40px',
};

export const getSize = (sizeC: TSize | string) => {
  // Check if the sizeC is a percentage value
  if (typeof sizeC === 'string' && sizeC.endsWith('%')) return sizeC;

  // Return the sizeC from the config or default if not found
  return sizeConfig[sizeC] || sizeConfig['default'];
};
