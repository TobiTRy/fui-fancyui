import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

export type TDateOutput = {
  date?: Date;
  isActive?: boolean;
  onClick?: () => void;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  sizeC?: TComponentSizes;
  borderRadius?: TBorderRadiusSizes;
  textC?: {
    selected?: string;
    notSelected?: string;
  };
};

type NativeButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type TDateOutputWithNativeAtrrs = TDateOutput & NativeButtonProps;
