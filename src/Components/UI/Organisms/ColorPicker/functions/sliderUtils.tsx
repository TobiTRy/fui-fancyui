import Color from 'color';

type SliderType = 'hue' | 'opacity';

interface IPositionToColorFunc {
  (type: SliderType, hue: number | undefined, clientX: number, clientY: number, rect: DOMRect):
    | { h: number; s: number; l: number }
    | number;
}

interface IColorToPositionFunc {
  (type: SliderType, color: Color, rect: DOMRect): { x: number; y: number };
}

export const positionToColorFunc: IPositionToColorFunc = (type, hue, clientX, clientY, rect) => {
  if (type === 'hue') {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));

    return (x / rect.width) * 360;
  } else if (type === 'opacity') {
    const x = Math.min(clientX - rect.left, rect.width - 5);
    const adjustedWidth = rect.width - 5;
    return Math.max(0, x / adjustedWidth);
  }   else {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

    const saturation = (x / rect.width) * 100;
    const lightness = (1 - y / rect.height) * (100 - (x / rect.width) * 50);
    return { h: hue ?? 0, s: saturation, l: lightness };
  }
};

export const colorToPositionFunc: IColorToPositionFunc = (type, color, rect) => {
  if (type === 'hue') {
    const createColor = Color(color);
    const x = (createColor.hsl().object().h / 360) * rect.width;
    return { x, y: 0 };
  } else if (type === 'opacity') {
    const alpha = color.alpha();
    const x = (alpha * (rect.width - 5));
    return { x, y: 0 };
  }else {
    const transformedColor = Color(color);
    const hslColor = transformedColor.hsl().object();
    const saturation = hslColor.s;
    const lightness = hslColor.l;

    const x = (saturation / 100) * rect.width;
    const y = rect.height * (1 - lightness / Math.max(1, 100 - 50 * (x / rect.width)));
    return { x, y };
  }
};
