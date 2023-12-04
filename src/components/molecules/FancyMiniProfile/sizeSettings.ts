import { IFancyProfilePicture } from '@/components/atoms/FancyProfilePicture/FancyProfilePicture';
import { TSpacings } from '@/interface/TSpacings';
import { TTypography } from '@/interface/TTypography';

// the interface for the different sizes
interface IPillSettings {
  [key: string]: {
    imageSize: IFancyProfilePicture['size'];
    padding: TSpacings | undefined;
    textSize: TTypography;
    paddingToEdge: TSpacings;
    gapPictureAndText: TSpacings;
  };
}

// the stettings for the different sizes
export const pillSettings: IPillSettings = {
  sm: {
    imageSize: 'xs',
    padding: undefined,
    textSize: 'verysmText',
    paddingToEdge: 'lg',
    gapPictureAndText: 'sm',
  },
  md: {
    imageSize: 'xs',
    padding: 'xs',
    textSize: 'smText',
    paddingToEdge: 'lg',
    gapPictureAndText: 'sm',
  },
  lg: {
    imageSize: 'sm',
    padding: 'xs',
    textSize: 'h5',
    paddingToEdge: 'xl',
    gapPictureAndText: 'sm',
  },
};
