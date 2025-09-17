/**
 * Bridge utilities for migrating from styled-components to Tailwind CSS
 * This file provides helper functions to ease the transition while maintaining
 * compatibility with existing FUI theme system
 */

import { TUiColorsNotTransparent } from '../types/TUiColorsNotTransparent';
import { TLayer } from '../types/TLayer';
import { TComponentSizesExtended } from '../types/TComponentSizes';
import { globalElementSizes } from '../design/theme/globalSizes';
import { TBorderRadiusSizes } from '../types/TBorderRadiusSizes';
import { TUiColorTypes } from '../types/TUiColorTypes';
import { TComponentSizesMid } from '../types/TComponentSizes';

/**
 * Maps FUI color types to Tailwind CSS color classes
 *
 * @param colorType The FUI color semantic type
 * @param layer The granular color layer (0-9)
 * @param property The CSS property type (background, text, border)
 * @returns Tailwind CSS class string
 */
export function getColorClass(
  colorType: TUiColorsNotTransparent,
  layer: TLayer,
  property: 'bg' | 'text' | 'border' | 'ring' = 'bg'
): string {
  return `${property}-${colorType}-${layer}`;
}

/**
 * Maps FUI spacing tokens to Tailwind spacing classes
 *
 * @param spacing The FUI spacing step (0-10)
 * @param property The spacing property type
 * @returns Tailwind CSS class string
 */
export function getSpacingClass(
  spacing: number,
  property: 'p' | 'm' | 'px' | 'py' | 'pt' | 'pb' | 'pl' | 'pr' | 'mt' | 'mb' | 'ml' | 'mr' | 'gap' = 'p'
): string {
  // Use FUI spacing directly since we configured it in tailwind.config.ts
  return `${property}-${spacing}`;
}

/**
 * Maps FUI component sizes to Tailwind size classes
 *
 * @param size The FUI component size
 * @returns Object with width and height Tailwind classes
 */
export function getSizeClasses(size: TComponentSizesExtended): { width: string; height: string } {
  const rawValue = globalElementSizes[size] ?? globalElementSizes.md;
  const sizeValue: string = typeof rawValue === 'number' ? rawValue + 'px' : String(rawValue);

  const createDimensionClass = (property: 'w' | 'h', value: string): string => {
    if (value === '100%') {
      return property === 'w' ? 'w-full' : 'h-full';
    }

    return property + '-[' + value + ']';
  };

  return {
    width: createDimensionClass('w', sizeValue),
    height: createDimensionClass('h', sizeValue),
  };
}

/**
 * Maps FUI border radius sizes to Tailwind rounded classes
 *
 * @param radius The FUI border radius size
 * @returns Tailwind CSS class string
 */
export function getBorderRadiusClass(radius: TBorderRadiusSizes): string {
  // Map FUI radius names to numbers
  const radiusMap: Record<TBorderRadiusSizes, number> = {
    xxs: 1,
    xs: 2,
    sm: 3,
    md: 4,
    lg: 5,
    xl: 6,
    xxl: 7,
    complete: 8,
  };

  return `rounded-${radiusMap[radius]}`;
}

/**
 * Generates Tailwind classes for FUI typography variants
 *
 * @param variant The FUI typography variant
 * @returns Tailwind CSS class string
 */
export function getTypographyClass(variant: string): string {
  // Map FUI typography variants to Tailwind font-size classes
  const typographyMap: Record<string, string> = {
    displayHero: 'text-display-hero',
    displayHeadline: 'text-display-headline',
    displayTitle: 'text-display-title',
    sectionTitle: 'text-section-title',
    sectionSubtitle: 'text-section-subtitle',
    sectionSubsectionTitle: 'text-section-subsection-title',
    bodytextLg: 'text-body-lg',
    bodytextMd: 'text-body-md',
    bodytextSm: 'text-body-sm',
    subTextCaption: 'text-sub-caption',
    subTextFootnote: 'text-sub-footnote',
    subTextLegal: 'text-sub-legal',
    interactiveXs: 'text-interactive-xs',
    interactiveSm: 'text-interactive-sm',
    interactiveMd: 'text-interactive-md',
    interactiveLg: 'text-interactive-lg',
    interactiveXl: 'text-interactive-xl',
  };

  return typographyMap[variant] || 'text-body-md';
}

/**
 * Generates hover state classes for FUI components
 *
 * @param colorType The base color type
 * @param layer The base color layer
 * @returns Tailwind CSS hover classes
 */
export function getHoverClasses(colorType: TUiColorsNotTransparent, layer: TLayer): string {
  // For hover states, typically use a lighter layer for backgrounds
  const hoverLayer = Math.max(0, layer - 1) as TLayer;
  return `hover:${getColorClass(colorType, hoverLayer, 'bg')} transition-fui`;
}

/**
 * Generates focus state classes for FUI components
 *
 * @returns Tailwind CSS focus classes
 */
export function getFocusClasses(): string {
  return 'focus-visible:focus-fui';
}

/**
 * Generates disabled state classes for FUI components
 *
 * @returns Tailwind CSS disabled classes
 */
export function getDisabledClasses(): string {
  return 'disabled:disabled-fui';
}

/**
 * Combines multiple Tailwind classes with proper spacing
 *
 * @param classes Array of class strings, arrays, or conditional classes
 * @returns Combined class string
 */
export function combineClasses(...classes: (string | undefined | false | string[])[]): string {
  return classes
    .flatMap((cls) => (Array.isArray(cls) ? cls : [cls]))
    .filter(Boolean)
    .join(' ');
}

/**
 * Generates conditional Tailwind classes based on props
 *
 * @param condition Boolean condition
 * @param truthyClasses Classes to apply when condition is true
 * @param falsyClasses Classes to apply when condition is false
 * @returns Class string based on condition
 */
export function conditionalClasses(condition: boolean, truthyClasses: string, falsyClasses: string = ''): string {
  return condition ? truthyClasses : falsyClasses;
}

/**
 * Maps FUI component states to Tailwind variant classes
 *
 * @param state Component state
 * @param baseClasses Base classes to apply variants to
 * @returns State-specific class string
 */
export function getStateClasses(
  state: 'default' | 'hover' | 'active' | 'focus' | 'disabled',
  baseClasses: string
): string {
  const stateMap: Record<string, string> = {
    default: baseClasses,
    hover: `${baseClasses} ${getHoverClasses('accent', 5)}`,
    active: `${baseClasses} active:scale-95`,
    focus: `${baseClasses} ${getFocusClasses()}`,
    disabled: `${baseClasses} ${getDisabledClasses()}`,
  };

  return stateMap[state] || baseClasses;
}

/**
 * Responsive utility for applying classes at different breakpoints
 *
 * @param classes Object with breakpoint keys and class values
 * @returns Combined responsive class string
 */
export function getResponsiveClasses(classes: {
  base?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}): string {
  const responsiveClasses = [];

  if (classes.base) responsiveClasses.push(classes.base);
  if (classes.sm) responsiveClasses.push(`sm:${classes.sm}`);
  if (classes.md) responsiveClasses.push(`md:${classes.md}`);
  if (classes.lg) responsiveClasses.push(`lg:${classes.lg}`);
  if (classes.xl) responsiveClasses.push(`xl:${classes.xl}`);

  return responsiveClasses.join(' ');
}

/**
 * Theme-aware class generator that switches between light/dark theme classes
 *
 * @param lightClasses Classes for light theme
 * @param darkClasses Classes for dark theme
 * @returns Theme-conditional class string
 */
export function getThemedClasses(lightClasses: string, darkClasses: string): string {
  return `${lightClasses} dark:${darkClasses}`;
}

/**
 * Utility for creating gradient backgrounds using FUI colors
 *
 * @param fromColor Starting color
 * @param fromLayer Starting color layer
 * @param toColor Ending color
 * @param toLayer Ending color layer
 * @param direction Gradient direction
 * @returns Tailwind gradient classes
 */
export function getGradientClasses(
  fromColor: TUiColorsNotTransparent,
  fromLayer: TLayer,
  toColor: TUiColorsNotTransparent,
  toLayer: TLayer,
  direction: 'r' | 'l' | 't' | 'b' | 'tr' | 'tl' | 'br' | 'bl' = 'r'
): string {
  return `bg-gradient-to-${direction} from-${fromColor}-${fromLayer} to-${toColor}-${toLayer}`;
}

/**
 * Animation utility for FUI transitions
 *
 * @param animation Animation type
 * @returns Tailwind animation classes
 */
export function getAnimationClasses(animation: 'fade' | 'slide' | 'scale' | 'bounce' | 'pulse' | 'spin'): string {
  const animationMap: Record<string, string> = {
    fade: 'animate-fade-in',
    slide: 'animate-slide-in',
    scale: 'animate-scale-in',
    bounce: 'animate-bounce',
    pulse: 'animate-pulse',
    spin: 'animate-spin',
  };

  return animationMap[animation] || '';
}

/**
 * Converts styled-components theme props to Tailwind classes
 *
 * This is the main utility for migrating from styled-components to Tailwind.
 * Takes common FUI component props and returns appropriate Tailwind classes.
 *
 * @param props Component theme props
 * @returns Combined Tailwind CSS class string
 */
export function getThemeClasses(props: {
  $themeType?: TUiColorTypes;
  $layer?: TLayer;
  $outlined?: boolean;
  $textColor?: TUiColorsNotTransparent;
  $sizeC?: TComponentSizesMid;
  $borderRadius?: TBorderRadiusSizes | false;
  $wide?: boolean;
  $disabled?: boolean;
  $backgroundState?: 'hover' | 'active' | 'focus';
}): string {
  const {
    $themeType = 'primary',
    $layer = 0,
    $outlined,
    $textColor,
    $sizeC,
    $borderRadius,
    $wide,
    $disabled,
    $backgroundState,
  } = props;

  const classes: string[] = [];

  // Basic layout classes
  if ($wide) classes.push('w-full');

  // Size classes
  if ($sizeC) {
    const sizeClasses = getSizeClasses($sizeC);
    if (!$wide) classes.push(sizeClasses.width);
    classes.push(sizeClasses.height);
  }

  // Border radius
  if ($borderRadius !== false && $borderRadius) {
    classes.push(getBorderRadiusClass($borderRadius));
  }

  // Theme-based styling
  if ($themeType !== 'transparent') {
    if ($outlined) {
      // Outlined style
      classes.push('border-2');
      classes.push(getColorClass($themeType as TUiColorsNotTransparent, $layer, 'border'));
      classes.push('bg-transparent');
      classes.push(getColorClass($textColor || ($themeType as TUiColorsNotTransparent), 0, 'text'));
    } else {
      // Normal filled style
      classes.push(getColorClass($themeType as TUiColorsNotTransparent, $layer, 'bg'));
      const textColor = $textColor || getContrastingColor($themeType as TUiColorsNotTransparent);
      classes.push(getColorClass(textColor, 0, 'text'));
    }
  } else {
    // Transparent style
    classes.push('bg-transparent');
    classes.push(getColorClass($textColor || 'primary', 0, 'text'));
  }

  // Interactive states
  if ($backgroundState) {
    classes.push('transition-fui');
    if ($backgroundState === 'hover') {
      classes.push(getHoverClasses($themeType as TUiColorsNotTransparent, $layer));
    }
  }

  // Disabled state
  if ($disabled) {
    classes.push('disabled:disabled-fui');
  }

  return combineClasses(...classes);
}

/**
 * Gets a contrasting color for better readability
 *
 * @param baseColor The base color type
 * @returns Contrasting color type
 */
export function getContrastingColor(baseColor: TUiColorsNotTransparent): TUiColorsNotTransparent {
  const contrastMap: Record<TUiColorsNotTransparent, TUiColorsNotTransparent> = {
    primary: 'secondary',
    secondary: 'primary',
    accent: 'secondary',
    info: 'secondary',
    success: 'primary',
    warning: 'primary',
    error: 'secondary',
  };

  return contrastMap[baseColor];
}

/**
 * Utility to migrate component sizing props to Tailwind classes
 *
 * @param sizeC Component size
 * @param wide Whether component should be full width
 * @param aspectRatio Optional aspect ratio (for square components)
 * @returns Size-related Tailwind classes
 */
export function getSizingClasses(sizeC?: TComponentSizesExtended, wide?: boolean, aspectRatio?: '1/1'): string {
  const classes: string[] = [];

  if (wide) {
    classes.push('w-full');
  } else if (sizeC) {
    const { width, height } = getSizeClasses(sizeC);
    classes.push(width);
    if (aspectRatio === '1/1') {
      classes.push('aspect-square');
    } else {
      classes.push(height);
    }
  }

  return combineClasses(...classes);
}

/**
 * Utility for padding/spacing based on component size
 *
 * @param sizeC Component size
 * @returns Padding classes
 */
export function getPaddingFromSize(sizeC: TComponentSizesMid): string {
  const paddingMap: Record<TComponentSizesMid, number> = {
    xs: 2, // 4px
    sm: 3, // 8px
    md: 4, // 12px
    lg: 5, // 16px
    xl: 6, // 24px
  };

  const padding = paddingMap[sizeC] || 4;
  return getSpacingClass(padding, 'p');
}

/**
 * Gets component spacing classes with fallback defaults based on size
 *
 * @param padding Custom padding number or undefined
 * @param margin Custom margin number or undefined
 * @param sizeC Component size for fallback padding
 * @param sizeSettingsProvider Optional function to get padding from size settings
 * @returns Array of spacing class strings
 */
export function getComponentSpacingClasses(
  padding?: number,
  margin?: number,
  sizeC?: TComponentSizesExtended,
  sizeSettingsProvider?: (size: TComponentSizesExtended) => number
): string[] {
  const spacingClasses: string[] = [];

  if (padding !== undefined) {
    spacingClasses.push(getSpacingClass(padding, 'p'));
  } else if (sizeC) {
    // Use provided size settings or fallback to default mapping
    const paddingValue = sizeSettingsProvider ? sizeSettingsProvider(sizeC) : getDefaultPaddingForSize(sizeC);
    spacingClasses.push(getSpacingClass(paddingValue, 'p'));
  }

  if (margin !== undefined) {
    spacingClasses.push(getSpacingClass(margin, 'm'));
  }

  return spacingClasses;
}

/**
 * Default padding mapping for component sizes
 * @param sizeC Component size
 * @returns Default padding number
 */
function getDefaultPaddingForSize(sizeC: TComponentSizesExtended): number {
  const paddingMap: Partial<Record<TComponentSizesExtended, number>> = {
    xxs: 2,
    xs: 3,
    sm: 4,
    md: 5,
    lg: 6,
    xl: 7,
    xxl: 8,
  };
  return paddingMap[sizeC] ?? paddingMap.xl ?? 5;
}

/**
 * Gets component border radius classes with fallback defaults based on size
 *
 * @param borderRadius Custom border radius or undefined
 * @param sizeC Component size for fallback radius
 * @param sizeSettingsProvider Optional function to get border radius from size settings
 * @returns Array of border radius class strings
 */
export function getComponentRadiusClasses(
  borderRadius?: TBorderRadiusSizes,
  sizeC?: TComponentSizesExtended,
  sizeSettingsProvider?: (size: TComponentSizesExtended) => TBorderRadiusSizes
): string[] {
  const radiusClasses: string[] = [];

  if (borderRadius) {
    radiusClasses.push(getBorderRadiusClass(borderRadius));
  } else if (sizeC) {
    // Use provided size settings or fallback to default mapping
    const radiusValue = sizeSettingsProvider ? sizeSettingsProvider(sizeC) : getDefaultRadiusForSize(sizeC);
    radiusClasses.push(getBorderRadiusClass(radiusValue));
  }

  return radiusClasses;
}

/**
 * Default border radius mapping for component sizes
 * @param sizeC Component size
 * @returns Default border radius
 */
function getDefaultRadiusForSize(sizeC: TComponentSizesExtended): TBorderRadiusSizes {
  const radiusMap: Partial<Record<TComponentSizesExtended, TBorderRadiusSizes>> = {
    xxs: 'xs',
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    xxl: 'xxl',
  };
  return radiusMap[sizeC] ?? 'xxl';
}
