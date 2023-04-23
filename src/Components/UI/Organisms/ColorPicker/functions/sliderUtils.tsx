import Color from 'color';

type SliderType = 'hue' | 'opacity';

interface IPositionToColorFunc {
  (type: SliderType, hue: number | undefined, clientX: number, clientY: number, rect: DOMRect): { h: number; s: number; l: number } | number;
}

interface IColorToPositionFunc {
  (type: SliderType, color: Color, rect: DOMRect): { x: number; y: number };
}

export const positionToColorFunc: IPositionToColorFunc = (type, hue, clientX, clientY, rect) => {
  if (type === 'hue') {
    // color for the hue slider
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));

    return (x / rect.width) * 360;
  } else if (type === 'opacity') {
    // transparency color for the opacity slider
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return x / rect.width;
  } else {
    // position to color for the color area
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

    const saturation = (x / rect.width) * 100;
    const lightness = (1 - y / rect.height) * (100 - (x / rect.width) * 50);
    return { h: hue ?? 0, s: saturation, l: lightness };
  }
};

export const colorToPositionFunc: IColorToPositionFunc = (type, color, rect) => {
  if (type === 'hue') {
    // color to position for the hue slider
    const createColor = Color(color);
    const x = (createColor.hsl().object().h / 360) * rect.width;
    return { x, y: 0 };
  } else if (type === 'opacity') {
    // color to position for the opacity slider
    const alpha = color.alpha();
    const x = alpha * rect.width;
    return { x, y: 0 };
  } else {
    // color to position for the color area
    const transformedColor = Color(color);
    const hslColor = transformedColor.hsl().object();
    const saturation = hslColor.s;
    const lightness = hslColor.l;

    const x = (saturation / 100) * rect.width;
    const y = rect.height * (1 - lightness / Math.max(1, 100 - 50 * (x / rect.width)));
    return { x, y };
  }
};
