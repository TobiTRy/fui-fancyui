import Color from 'color';

//define the min and max value for the opacity
const minOpacity = 0;
const maxOpacity = 1;

// calculate the color from the position on the slider
export const positionToColorOpacity = (clientX: number, rect: DOMRect) => {
  const x = clientX - rect.left;
  //calculate the opacity from the marker position
  const opacity = (x / rect.width) * (maxOpacity - minOpacity);

  return Math.min(Math.max(opacity, minOpacity), maxOpacity);
};

// calculate the position from the color on the slider
export const colorToPositionOpacity = (color: Color) => {
  const alpha = color.alpha(); // alpha values are set from 0.01 to 1
  const x = alpha * 100;

  return { x, y: 0 };
};
