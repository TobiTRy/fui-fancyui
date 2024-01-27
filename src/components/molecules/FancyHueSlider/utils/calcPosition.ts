import Color from 'color';

//define the min and max hue value for the slider
const minHue = 0;
const maxHue = 359.9; // 360 is red again, 360degree is the same as 0 degree

//calculate the hue from the position of the marker from the slider
export const positionToColorHue = (clientX: number, rect: DOMRect) => {
  const x = clientX - rect.left;
  const hue = (x / rect.width) * (maxHue - minHue);

  return Math.min(Math.max(hue, minHue), maxHue);
};

//calculate the position of the slider from the hue value
export const colorToPositionHue = (color: Color) => {
  if (!color) return { x: 0, y: 0 };
  //get the hue value from the current color
  const hue = Color(color).hsl().object().h;
  //calculate the percentage of the hue value
  const huePercentage = ((hue - minHue) / (maxHue - minHue)) * 100;

  return { x: huePercentage, y: 0 };
};
