import Color from 'color';

interface IColorPickerUtils {
  color: Color;
  opacity: number;
  outputFormat?: 'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla';
}


export const emitSelectedColorChange = ({color, opacity, outputFormat}: IColorPickerUtils) => {
  const colorObj = Color(color).alpha(opacity);
  let outputColor;

  switch (outputFormat) {
    case 'rgb':
      outputColor = colorObj.rgb().string();
      break;
    case 'rgba':
      const { r, g, b } = colorObj.rgb().object();
      outputColor = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${opacity})`;
      break;
    case 'hsl':
      outputColor = colorObj.hsl().string();
      break;
    case 'hsla':
      outputColor = colorObj.hsl().string();
      break;
    case 'hex':
      outputColor = colorObj.hex();
      break;
    case 'hexa':
      outputColor = colorObj.hex() + Math.round(opacity * 255).toString(16).padStart(2, '0');
      break;
    default:
      outputColor = colorObj.hsl().string();
  }

  return outputColor;
};
