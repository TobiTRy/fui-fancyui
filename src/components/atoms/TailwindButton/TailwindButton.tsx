import React from 'react';
import { getThemeClasses, getPaddingFromSize, combineClasses } from '@/utils/tailwind-bridge';
import { TComponentSizesMid } from '@/types/TComponentSizes';
import { TUiColorTypes } from '@/types/TUiColorTypes';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TLayer } from '@/types/TLayer';

interface TailwindButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $themeType?: TUiColorTypes;
  $layer?: TLayer;
  $outlined?: boolean;
  $sizeC?: TComponentSizesMid;
  $wide?: boolean;
  $borderRadius?: TBorderRadiusSizes | false;
  children: React.ReactNode;
}

/**
 * Example Tailwind CSS Button Component
 *
 * This demonstrates how to migrate from styled-components to Tailwind CSS
 * using the new theme utilities. This component provides the same theming
 * capabilities as the original FUI buttons but uses Tailwind classes.
 *
 * @param props Button props including FUI theme properties
 * @returns React button component with Tailwind styling
 */
export default function TailwindButton(props: TailwindButtonProps) {
  const {
    $themeType = 'primary',
    $layer = 0,
    $outlined,
    $sizeC = 'md',
    $wide,
    $borderRadius = 'md',
    children,
    className,
    disabled,
    ...buttonProps
  } = props;

  // Generate theme-based classes using the new utilities
  const themeClasses = getThemeClasses({
    $themeType,
    $layer,
    $outlined,
    $sizeC,
    $borderRadius,
    $wide,
    $disabled: disabled,
    $backgroundState: 'hover',
  });

  // Add padding based on component size
  const paddingClasses = getPaddingFromSize($sizeC);

  // Base button classes
  const baseClasses = [
    'cursor-pointer',
    'box-border',
    'inline-flex',
    'items-center',
    'justify-center',
    'text-center',
    'font-bold',
    'min-w-fit',
    'transition-fui',
    'focus-visible:focus-fui',
  ];

  // Combine all classes
  const allClasses = combineClasses(...baseClasses, themeClasses, paddingClasses, className);

  return (
    <button className={allClasses} disabled={disabled} {...buttonProps}>
      {children}
    </button>
  );
}
