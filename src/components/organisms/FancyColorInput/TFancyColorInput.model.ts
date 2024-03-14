import { IColorFormat } from '@/utils/variables/colorFormat/colorFormats';
import Color from 'color';

export type TFancyColorInput = {
  pickedColor: Color | string;
  opacity: number;
  currentColorType?: IColorFormat;
  handler?: (color: Color) => void;
  colorTypeHandler?: (type: IColorFormat) => void;
  handlerOpacity: (color: number) => void;
};

export type TFancyColorOutputHTMLAttrs = TFancyColorInput & React.HTMLAttributes<HTMLDivElement>;
