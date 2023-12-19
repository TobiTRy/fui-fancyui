import { TSpacings } from '@/interface/TSpacings';
import { TTypography } from '@/interface/TTypography';

// the interface for the different sizes
interface IPillSettings {
  [key: string]: {
    titleSize: TTypography;
    subtitleSize: TTypography;
    gap: TSpacings;
    paddingToEdge: TSpacings;
  };
}

// the stettings for the different sizes
export const sizeSettings: IPillSettings = {
  sm: {
    paddingToEdge: 'xs',
    titleSize: 'smText',
    gap: 'xxs',
    subtitleSize: 'verysmText',
  },
  md: {
    paddingToEdge: 'sm',
    gap: 'xs',
    titleSize: 'h5',
    subtitleSize: 'verysmText',
  },
  lg: {
    paddingToEdge: 'sm',
    gap: 'xs',
    titleSize: 'h5',
    subtitleSize: 'verysmText',
  },
};
