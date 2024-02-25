import { TLayer } from '@/types/TLayer';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TDateOutput = {
  date?: Date;
  isActive?: boolean;
  onClick?: () => void;
  themeType?: TUiColorsMain;
  layer?: TLayer;
  sizeC?: TComponentSizes;
  borderRadius?: TBorderRadiusSizes;
  textCustom?: {
    selected?: string;
    notSelected?: string;
  };
};

type NativeButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type TDateOutputWithNativeAtrrs = TDateOutput & NativeButtonProps;
