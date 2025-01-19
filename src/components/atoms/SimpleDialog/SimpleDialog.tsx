'use client';

import { useEffect, useRef, useState } from 'react';

import { StyledDialog } from './SimpleDialog.style';
import { TSimpleDialogWithHTMLAttrs } from '@/components/atoms/SimpleDialog/SimpleDialog.model';

// --------------------------------------------------------------------------- //
// -------  A container that can filld with everythin and acts as a dialog --- //
// --------------------------------------------------------------------------- //
export default function SimpleDialog(props: TSimpleDialogWithHTMLAttrs) {
  const { isOpen = false, children, themeType = 'primary', layer = 1, externalStyle, ...htmlProps } = props;

  const dialogRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setRender(true);
      // Trigger animation in the next frame after render
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
      lastFocusedElement.current = document.activeElement as HTMLElement;
    } else {
      setIsAnimating(false);
      // Wait for animation to complete before removing from DOM
      const timer = setTimeout(() => {
        setRender(false);
      }, 300); // Match this with your CSS transition duration

      if (lastFocusedElement.current) {
        lastFocusedElement.current.focus();
      }

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (shouldRender && dialogRef.current) {
      const timer = setTimeout(() => {
        dialogRef?.current?.focus();
      }, 10);

      return () => clearTimeout(timer);
    }
  }, [shouldRender]);

  return shouldRender ? (
    <StyledDialog
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      $isAnimating={isAnimating}
      $themeType={themeType}
      $layer={layer}
      $externalStyle={externalStyle}
      {...htmlProps}
    >
      {children}
    </StyledDialog>
  ) : null;
}
