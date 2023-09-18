import Color from 'color';

const colorTransparencyCalculator = (color: string, transparency: number) => {
  if (transparency > 1 || transparency < 0) throw new Error('transparency must be between 0 and 1');

  //check color is valid
  try {
    Color(color);
  } catch (error) {
    console.error('color is not valid');
    return;
  }

  return Color(color).alpha(transparency).rgb().string();
};

export default colorTransparencyCalculator;