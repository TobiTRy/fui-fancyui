import { TSpacings } from '@/types/TSpacings';
import { TTypographyList } from '@/types/TTypographyList';

// the interface for the different sizes
interface IPillSettings {
  [key: string]: {
    titleSize: TTypographyList;
    subtitleSize: TTypographyList;
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
    gap: 'xxs',
    titleSize: 'h6',
    subtitleSize: 'verysmText',
  },
  lg: {
    paddingToEdge: 'sm',
    gap: 'xs',
    titleSize: 'h5',
    subtitleSize: 'verysmText',
  },
};
