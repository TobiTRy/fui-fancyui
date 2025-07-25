import { TTypographyVariants } from '@/types/TTypographyVariants';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TSystemMessageBox } from '@/components/atoms/SystemMessageBox/TSystemMessageBox.model';
import { TSpacings } from '@/types/TSpacings';
import { TComponentSizes } from '@/types';

type TSizeObj = {
  systemMessageSize: TComponentSizes;
};

// the template for the sizes
export const sizes: TSizeSettings<TSizeObj> = {
  sm: {
    systemMessageSize: 'sm',
  },
  md: {
    systemMessageSize: 'md',
  },
  lg: {
    systemMessageSize: 'lg',
  },
};
