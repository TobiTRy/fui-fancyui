import {
  GradientPosition,
  TGradientColor,
  TTextGradientProps,
} from '@/components/atoms/TextGradient/TextGradient.model';
import { getLinearGradientPosition } from '@/components/atoms/TextGradient/utils/getPositionToGradientPosition';

export const generateGradient = (props: Omit<TTextGradientProps, 'children'>) => {
  const { degree, colors, orientation, position } = props;

  // Construct color string with stop positions
  let modifidColors: string[] | undefined;

  // If colors is an object, it means it's an array of TGradientColor
  if (typeof colors[0] === 'object') {
    const colorObj = colors as TGradientColor[];
    modifidColors = colorObj.map((colorObj) => {
      return `${colorObj.color}${colorObj.stop ? ' ' + colorObj.stop : ''}`;
    });
  } else {
    // If colors is an array of strings, just use it as is
    modifidColors = colors as string[];
  }

  // Join the colors with a comma
  const colorString = modifidColors.join(', ');

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
