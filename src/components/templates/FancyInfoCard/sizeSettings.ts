import { TSizes } from '@/interface/TComponentSizes';
import { TTypography } from '@/interface/TTypography';

type TSizeObj = {
  iconSize: TSizes;
  title: TTypography;
  descriptionSize: TTypography;
};

type TSizesObject = {
  [K in TSizes]: TSizeObj;
};

// the template for the sizes
export const sizes: TSizesObject = {
  sm: {
    iconSize: 'md',
    title: 'h6',
    descriptionSize: 'smText',
  },
  md: {
    iconSize: 'lg',
    title: 'h5',
    descriptionSize: 'content',
  },
  lg: {
    iconSize: 'lg',
    title: 'h4',
    descriptionSize: 'button',
  },
};
