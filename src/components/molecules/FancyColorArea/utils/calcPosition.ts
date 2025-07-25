//this function calculates the current color to a position using the HSV Color Type

import Color from 'color';

//HSV can be better used for merging Lightness and Saturation (L: 100 and S:100) = Full Color
export const positionToColor = (hue: number, clientX: number, clientY: number, rect: DOMRect) => {
  //calculate the position of the mouse in the color area(rect)
  const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
  const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

  //calculate the saturation and lightness(value) from the position
  const saturation = (x / rect.width) * 100;
  const value = 100 - (y / rect.height) * 100;

  return {
    h: hue ?? 0,
    s: saturation,
    v: value,
  };
};

//this function calculates the color to the position on the area using the HSV Color Type
export const colorToPosition = (color: Color, rect: DOMRect) => {
  //get the saturation and lightness(value) from the color
  const hsvColor = color.hsv().object();
  const saturation = hsvColor.s;
  const value = hsvColor.v;

  //calculate the x and y position from the saturation and lightness(value)
  const x = (saturation * rect.width) / 100;
  const y = (1 - value / 100) * rect.height;

  //calculate the percentage of the position
  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  return { x: Math.max(0, xPercent), y: Math.max(0, yPercent) };
};
