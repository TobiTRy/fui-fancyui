import React, { ElementType } from 'react';
import {
  combineClasses,
  getSizingClasses,
  getComponentSpacingClasses,
  getComponentRadiusClasses,
} from '@/utils/tailwind-bridge';
import { TLayer } from '@/types/TLayer';
import { TUiColorTypes } from '@/types/TUiColorTypes';
import { TComponentSizesExtended } from '@/types/TComponentSizes';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import generateThemeDesignForComponentTW from '@/design/designFunctions/generateThemeDesignForComponent/generateThemeDesignForComponentTW';
import { theme } from '@/design/theme/theme';
import { getPaddingFromSizeSettings, getBorderRadiusFromSizeSettings } from './sizeSettings';

export interface FancyBoxTwProps<T extends ElementType = 'div'> {
  as?: T;
  children?: React.ReactNode;

  // Theme props
  themeType?: TUiColorTypes;
  layer?: TLayer;

  // Layout props
  sizeC?: TComponentSizesExtended;
  wide?: boolean;

  // Style props
  outlined?: boolean;
  outlinedRemoveBorder?: boolean;
  outlinedBackgroundStrength?: number;
  borderRadius?: TBorderRadiusSizes;

  // Spacing props (using numbered system)
  padding?: number;
  margin?: number;

  // HTML attributes
  className?: string;
}

export type FancyBoxTwWithHTMLAttrs<T extends ElementType = 'div'> = FancyBoxTwProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof FancyBoxTwProps<T>>;

/**
 * FancyBoxTw - A Tailwind CSS version of FancyBox
 *
 * A flexible container component that provides consistent theming, sizing,
 * and spacing using Tailwind CSS instead of styled-components. This is the
 * equivalent of the original FancyBox but optimized for Tailwind.
 *
 * @param props Component props including theme, size, and layout options
 * @returns A themed container element using Tailwind classes
 */
export default function FancyBoxTw<T extends ElementType = 'div'>(props: FancyBoxTwWithHTMLAttrs<T>) {
  const {
    as = 'div' as T,
    children,
    themeType = 'primary',
    layer = 1,
    sizeC,
    wide = true,
    outlined,
    outlinedRemoveBorder,
    outlinedBackgroundStrength = 0.1,
    borderRadius,
    padding,
    margin,
    className,
    ...htmlProps
  } = props;

  const Component = as;

  // Generate base classes
  const baseClasses = ['box-border'];

  // Generate width classes
  if (wide) {
    baseClasses.push('w-full');
  } else if (sizeC) {
    const sizingClasses = getSizingClasses(sizeC, false);
    baseClasses.push(sizingClasses);
  }

  // Generate theme classes using our utility
  const themeClasses = generateThemeDesignForComponentTW({
    theme,
    $themeType: themeType,
    $layer: layer,
    $outlined: outlined,
    $outlinedRemoveBorder: outlinedRemoveBorder,
    $outlinedBackgroundStrength: outlinedBackgroundStrength,
  });

  // Generate spacing classes using utility with size settings
  const spacingClasses = getComponentSpacingClasses(padding, margin, sizeC, getPaddingFromSizeSettings);

  // Generate border radius classes using utility with size settings
  const radiusClasses = getComponentRadiusClasses(borderRadius, sizeC, getBorderRadiusFromSizeSettings);

  // Combine all classes (theme classes now come from our utility as a string)
  const allClasses = combineClasses(...baseClasses, themeClasses, ...spacingClasses, ...radiusClasses, className);

  return (
    <Component
      className={allClasses}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(htmlProps as any)}
    >
      {children}
    </Component>
  );
}
