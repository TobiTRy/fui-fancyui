import Color from 'color';

type ColorType = ReturnType<typeof Color>;

import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { IColorFormat } from '@/utils/variables/colorFormat/colorFormats';

export type TFancyColorInput = {
  pickedColor: ColorType | string;
  opacity: number;
  currentColorType?: IColorFormat;
  handler?: (color: ColorType) => void;
  colorTypeHandler?: (type: IColorFormat) => void;
  handlerOpacity?: (color: number) => void;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
};

export type TFancyColorOutputHTMLAttrs = TFancyColorInput & React.HTMLAttributes<HTMLDivElement>;
