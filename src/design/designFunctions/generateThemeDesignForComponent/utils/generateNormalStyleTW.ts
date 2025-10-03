import { getColorClass, combineClasses, getHoverClasses } from '@/utils/tailwind-bridge';
import { IGenerateThemeDesignForComponentTW } from '../generateThemeDesignForComponentTW';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

type TGenerateNormalStyleTW = Pick<
  IGenerateThemeDesignForComponentTW,
  '$themeType' | 'theme' | '$layer' | '$textColor' | '$backgroundState' | '$hoverColor'
>;

/**
 * Generates Tailwind classes for normal style components
 *
 * This creates the standard filled component appearance with background color
 * and contrasting text color. Equivalent to generateNormalStyle but returns
 * Tailwind classes instead of styled-components CSS.
 *
 * @param props Component styling props
 * @returns String of Tailwind CSS classes
 */
export const generateNormalStyleTW = (props: TGenerateNormalStyleTW): string => {
  const { $themeType, $layer = 0, $textColor, $backgroundState } = props;

  const colorType = ($themeType ?? 'primary') as TUiColorsNotTransparent;
  const layer = $layer ?? 0;

  // Generate background color class
  const backgroundClass = getColorClass(colorType, layer, 'bg');

  // Generate text color class - use opposite color for contrast
  const textClass = $textColor ? getColorClass($textColor, 0, 'text') : getOppositeTextColorClass(colorType);

  // Generate hover/active classes if background state is enabled
  const stateClasses = $backgroundState ? getHoverClasses(colorType, layer) : '';

  const classes = ['border-none', backgroundClass, textClass, stateClasses, 'transition-fui'];

  return combineClasses(...classes);
};

/**
 * Gets the opposite text color for better contrast
 * Primary backgrounds use secondary text, secondary backgrounds use primary text
 */
function getOppositeTextColorClass(themeType: TUiColorsNotTransparent): string {
  if (themeType === 'primary') {
    return getColorClass('secondary', 0, 'text');
  } else if (themeType === 'secondary') {
    return getColorClass('primary', 0, 'text');
  }

  // For other colors, use a contrasting color based on the color type
  const contrastMap: Record<TUiColorsNotTransparent, TUiColorsNotTransparent> = {
    primary: 'secondary',
    secondary: 'primary',
    accent: 'secondary',
    info: 'secondary',
    success: 'primary',
    warning: 'primary',
    error: 'secondary',
  };

  return getColorClass(contrastMap[themeType], 0, 'text');
}
