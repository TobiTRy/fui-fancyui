import { IColorFormat } from '@/utils/variables/colorFormat/colorFormats';
import Color from 'color';

export type TFancyColorOutput = {
  pickedColor: Color | string;
  opacity: number;
  initialColorType?: IColorFormat;
  handler?: (color: Color) => void;
  colorTypeHandler?: (type: IColorFormat) => void;
  handlerOpacity: (color: number) => void;
};
