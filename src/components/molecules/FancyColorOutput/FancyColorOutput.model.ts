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
