import { GradientPosition, TTextGradientProps } from '@/components/atoms/TextGradient/TextGradient.model';
import { getLinearGradientPosition } from '@/components/atoms/TextGradient/utils/getPositionToGradientPosition';

export const generateGradient = (props: Omit<TTextGradientProps, 'children'>) => {
  const { degree, colors, orientation, position } = props;

  // Construct color string with stop positions

  const colorString = colors
    .map((color) => {
      // If the color is an object, return the color and the stop position
      if (typeof color === 'object') {
        const colorObj = color;
        return `${colorObj.color}${colorObj.stop ? ' ' + colorObj.stop : ''}`;
      }
      // If the color is a string, return it as is (no stop position)
      return color;
      // Join the colors with a comma
    })
    .join(', ');

  let gradient = '';

  switch (orientation) {
    case 'linear': {
      const linearPosition = position ? getLinearGradientPosition(position) : `${degree || 90}deg`;
      gradient = `linear-gradient(${linearPosition}, ${colorString})`;
      break;
    }
    case 'repeatLinear': {
      const linearPosition = position ? getLinearGradientPosition(position) : `${degree || 90}deg`;
      gradient = `repeating-linear-gradient(${linearPosition}, ${colorString})`;
      break;
    }
    case 'radial':
      gradient = `radial-gradient(circle at ${adjustPositionForRadial(position)}, ${colorString})`;
      break;
    case 'repeatRadial':
      gradient = `repeating-radial-gradient(circle at ${adjustPositionForRadial(position)}, ${colorString})`;
      break;
    case 'elliptical':
      gradient = `radial-gradient(ellipse at ${adjustPositionForRadial(position)}, ${colorString})`;
      break;
    case 'repeatElliptical':
      gradient = `repeating-radial-gradient(ellipse at ${adjustPositionForRadial(position)}, ${colorString})`;
      break;
    default:
      gradient = `linear-gradient(${degree || 90}deg, ${colorString})`;
      break;
  }

  return gradient;
};

const adjustPositionForRadial = (position?: GradientPosition) => {
  return position?.replace('-', ' ') || 'center';
};
