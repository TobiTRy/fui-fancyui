/**
 * Bridge utilities for migrating from styled-components to Tailwind CSS
 * This file provides helper functions to ease the transition while maintaining
 * compatibility with existing FUI theme system
 */

import { TUiColorsNotTransparent } from '../types/TUiColorsNotTransparent';
import { TLayer } from '../types/TLayer';
import { TComponentSizes } from '../types/TComponentSizes';
import { TSpacings } from '../types/TSpacings';
import { TBorderRadiusSizes } from '../types/TBorderRadiusSizes';

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

type TSpacingTw = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';

/**
 * Maps FUI spacing tokens to Tailwind spacing classes
 *
 * @param spacing The FUI spacing size
 * @param property The spacing property type
 * @returns Tailwind CSS class string
 */
export function getSpacingClass(
  spacing: TSpacingTw,
  property: 'p' | 'm' | 'px' | 'py' | 'pt' | 'pb' | 'pl' | 'pr' | 'mt' | 'mb' | 'ml' | 'mr' | 'gap' = 'p'
): string {
  // Map FUI spacing names to standard Tailwind spacing scale
  const spacingMap: Record<TSpacingTw, string> = {
    '1': '0.5', // 2px
    '2': '1', // 4px
    '3': '2', // 8px
    '4': '3', // 12px
    '5': '4', // 16px
    '6': '6', // 24px
    '7': '8', // 32px
    '8': '10', // 40px
    '9': '12', // 48px
    '10': '16', // 64px
  };

  return `${property}-${spacingMap[spacing]}`;
}

/**
 * Maps FUI component sizes to Tailwind size classes
 *
 * @param size The FUI component size
 * @returns Object with width and height Tailwind classes
 */
export function getSizeClasses(size: TComponentSizes): { width: string; height: string } {
  return {
    width: `w-element-${size}`,
    height: `h-element-${size}`,
  };
}

/**
 * Maps FUI border radius sizes to Tailwind rounded classes
 *
 * @param radius The FUI border radius size
 * @returns Tailwind CSS class string
 */
export function getBorderRadiusClass(radius: TBorderRadiusSizes): string {
  // Map FUI radius names to Tailwind radius classes
  const radiusMap: Record<TBorderRadiusSizes, string> = {
    xxs: 'sm', // 4px -> rounded-sm
    xs: 'md', // 8px -> rounded-md
    sm: 'lg', // 12px -> rounded-lg
    md: 'xl', // 16px -> rounded-xl
    lg: '2xl', // 24px -> rounded-2xl
    xl: '3xl', // 32px -> rounded-3xl
    xxl: '3xl', // 40px -> rounded-3xl (closest)
    complete: 'full', // 200px -> rounded-full
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
 * @param classes Array of class strings or conditional classes
 * @returns Combined class string
 */
export function combineClasses(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
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
