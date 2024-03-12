import { IColorFormat } from '@/utils/variables/colorFormat/colorFormats';
import Color from 'color';

export type TFancyColorOutput = {
  pickedColor: Color | string;
  opacity: number;
  currentColorType?: IColorFormat;
  handler?: (color: Color) => void;
  colorTypeHandler?: (type: IColorFormat) => void;
  handlerOpacity: (color: number) => void;
};

export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

export interface RGBAColor extends RGBColor {
  a: number;
}

export interface HSLColor {
  h: number;
  s: number;
  l: number;
}

export interface HSLAColor extends HSLColor {
  a: number;
}

// this interfaces is used to match the input "names" (r, g, b, a, h, s, l)
// to update the changed value in the color object
export interface ColorTypeLetters {
  [key: string]: number | string;
  r: number;
  g: number;
  b: number;
  a: number;
  h: number;
  s: number;
  l: number;
}

export type ColorTypes =
  | {
      type: 'rgb';
      color: RGBColor;
    }
  | {
      type: 'rgba';
      color: RGBAColor;
    }
  | {
      type: 'hsl';
      color: HSLColor;
    }
  | {
      type: 'hsla';
      color: HSLAColor;
    }
  | {
      type: 'hex';
      color: string;
    }
  | {
      type: 'hexa';
      color: string;
    };

export type ColorObject = RGBColor | RGBAColor | HSLColor | HSLAColor;
