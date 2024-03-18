import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TColorInputs = {
  currentColorObject?: TColorTypes;
  handler: ({ inputLetter, value }: { inputLetter: string; value: string }) => void;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
};

export interface TRGBColor {
  r: number;
  g: number;
  b: number;
}

export interface TRGBAColor extends TRGBColor {
  a: number;
}

export interface THSLColor {
  h: number;
  s: number;
  l: number;
}

export interface THSLAColor extends THSLColor {
  a: number;
}

// this interfaces is used to match the input "names" (r, g, b, a, h, s, l)
// to update the changed value in the color object
export interface TColorTypeLetters {
  [key: string]: number | string;
  r: number;
  g: number;
  b: number;
  a: number;
  h: number;
  s: number;
  l: number;
}

export type TColorTypes =
  | {
      type: 'rgb';
      color: TRGBColor;
    }
  | {
      type: 'rgba';
      color: TRGBAColor;
    }
  | {
      type: 'hsl';
      color: THSLColor;
    }
  | {
      type: 'hsla';
      color: THSLAColor;
    }
  | {
      type: 'hex';
      color: string;
    }
  | {
      type: 'hexa';
      color: string;
    };

export type TColorObject = TRGBColor | TRGBAColor | THSLColor | THSLAColor;
