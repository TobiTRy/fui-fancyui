// Set size based on prop
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

export const getSize = (size: TSize | string) => {
  // Check if the size is a percentage value
  if (typeof size === 'string' && size.endsWith('%')) return size;

  // Return the size from the config or default if not found
  return sizeConfig[size] || sizeConfig['default'];
};
