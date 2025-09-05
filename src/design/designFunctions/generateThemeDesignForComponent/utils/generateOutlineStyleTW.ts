import { getColorClass, combineClasses } from '@/utils/tailwind-bridge';
import { IGenerateThemeDesignForComponentTW } from '../generateThemeDesignForComponentTW';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TLayer } from '@/types/TLayer';

type TGenerateOutlineStyleTW = Pick<
  IGenerateThemeDesignForComponentTW,
  | '$outlined'
  | '$themeType'
  | 'theme'
  | '$layer'
  | '$outlinedBackgroundStrength'
  | '$backgroundState'
  | '$hoverColor'
  | '$textColor'
  | '$outlinedRemoveBorder'
>;

/**
 * Generates Tailwind classes for outlined/bordered components
 *
 * Creates components with borders and subtle background colors.
 * Equivalent to generateOutlineStyle but returns Tailwind classes.
 *
 * @param props Component styling props including outline-specific options
 * @returns String of Tailwind CSS classes
 */
export const generateOutlineStyleTW = (props: TGenerateOutlineStyleTW): string => {
  const { $themeType, $layer = 0, $backgroundState, $textColor, $outlinedRemoveBorder } = props;

  const colorType = ($themeType ?? 'primary') as TUiColorsNotTransparent;
  const layer = $layer ?? 0;

  // Generate border color (same as main theme color)
  const borderClass = $outlinedRemoveBorder
    ? 'border-none'
    : combineClasses('border-2', getColorClass(colorType, layer, 'border'));

  // Generate text color (use theme color or custom color)
  const textClass = $textColor ? getColorClass($textColor, 0, 'text') : getColorClass(colorType, 0, 'text');

  // Generate subtle background (using opacity classes or lighter layer)
  const backgroundClass = generateSubtleBackgroundClass(colorType, layer);

  // Generate hover/active classes if background state is enabled
  const stateClasses = $backgroundState ? getOutlineHoverClasses(colorType, layer) : '';

  const classes = ['box-border', borderClass, textClass, backgroundClass, stateClasses, 'transition-fui'];

  return combineClasses(...classes);
};

/**
 * Generates a subtle background class for outlined components
 * Uses CSS variables with opacity for dynamic theme support
 */
function generateSubtleBackgroundClass(colorType: TUiColorsNotTransparent, layer: TLayer): string {
  // For outlined components, we want a very subtle background
  // We'll use a lighter layer or create a custom opacity class
  const lighterLayer = Math.min(9, layer + 3) as TLayer;
  return getColorClass(colorType, lighterLayer, 'bg') + ' opacity-20';
}

/**
 * Generates hover classes for outlined components
 * Increases background opacity/intensity on hover
 */
function getOutlineHoverClasses(colorType: TUiColorsNotTransparent, layer: TLayer): string {
  const lighterLayer = Math.min(9, layer + 2) as TLayer;
  const hoverBgClass = getColorClass(colorType, lighterLayer, 'bg');

  return combineClasses(`hover:${hoverBgClass}`, 'hover:opacity-30', 'active:scale-95');
}
