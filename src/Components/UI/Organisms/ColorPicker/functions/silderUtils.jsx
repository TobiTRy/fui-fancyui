import Color from 'color';

export const positionToColorFunc = (type, hue, clientX, clientY, rect) => {
  if (type === 'hue') {
    //position to color for the hue slider
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return (x / rect.width) * 360;
  } else if (type === 'opacity') {
    //position to color for the opacity slider
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return x / rect.width;
  } else {
    //postion to color for the color area
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

    const saturation = (x / rect.width) * 100;
    const lightness = (1 - y / rect.height) * (100 - (x / rect.width) * 50);
    return { h: hue, s: saturation, l: lightness };
  }
};

export const colorToPositionFunc = (type, color, rect) => {
  if (type === 'hue') {
    //color to position for the hue slider
    const x = (color / 360) * rect.width;
    return { x, y: 0 };
  } else if (type === 'opacity') {
    //color to position for the opacity slider
    const x = color * rect.width;
    return { x, y: 0 };
  } else {
    //color to position for the color area
    const hslColor = Color(color).hsl();

    const saturation = hslColor.color[1];
    const lightness = hslColor.color[2];

    const x = parseInt((saturation / 100) * rect.width);
    const y = parseInt(rect.height * (1 - lightness / Math.max(1, 100 - 50 * (x / rect.width))));
    return { x, y };
  }
};
