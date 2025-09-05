import { getColorClass, combineClasses, getThemedClasses } from '@/utils/tailwind-bridge';
import { IGenerateThemeDesignForComponentTW } from '../generateThemeDesignForComponentTW';

type TGenerateTransparentStyleTW = Pick<
  IGenerateThemeDesignForComponentTW,
  '$themeType' | 'theme' | '$layer' | '$textColor' | '$backgroundState' | '$hoverColor'
>;

/**
 * Generates Tailwind classes for transparent/ghost components
 *
 * Creates components with no background and themed text colors.
 * Text color adapts based on theme (light/dark mode support).
 * Equivalent to generateTransparentStyle but returns Tailwind classes.
 *
 * @param props Component styling props
 * @returns String of Tailwind CSS classes
 */
export const generateTransparentStyleTW = (props: TGenerateTransparentStyleTW): string => {
  const { $textColor, $backgroundState } = props;

  // Transparent background
  const backgroundClass = 'bg-transparent';

  // Generate text color - adapt to theme if no custom color provided
  const textClass = $textColor ? getColorClass($textColor, 0, 'text') : getThemeAdaptiveTextClass();

  // Generate hover classes for transparent components
  const stateClasses = $backgroundState ? getTransparentHoverClasses() : '';

  const classes = ['border-none', backgroundClass, textClass, stateClasses, 'transition-fui'];

  return combineClasses(...classes);
};

/**
 * Gets theme-adaptive text color for transparent components
 * Uses secondary color in light mode, secondary in dark mode for better contrast
 */
function getThemeAdaptiveTextClass(): string {
  // In light mode: use primary text (dark)
  // In dark mode: use secondary text (light)
  const lightModeClass = getColorClass('primary', 0, 'text');
  const darkModeClass = getColorClass('secondary', 0, 'text');

  return getThemedClasses(lightModeClass, darkModeClass);
}

/**
 * Generates hover classes for transparent components
 * Adds subtle background on hover while maintaining transparency feel
 */
function getTransparentHoverClasses(): string {
  // Light subtle background on hover
  const hoverBgLight = getColorClass('secondary', 8, 'bg');
  const hoverBgDark = getColorClass('primary', 8, 'bg');

  return combineClasses(`hover:${getThemedClasses(hoverBgLight, hoverBgDark)}`, 'hover:opacity-50', 'active:scale-95');
}
