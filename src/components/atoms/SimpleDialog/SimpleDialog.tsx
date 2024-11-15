'use client';

import { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

import { StyledDialog } from './SimpleDialog.style';
import { TSimpleDialogWithHTMLAttrs } from '@/components/atoms/SimpleDialog/SimpleDialog.model';

// --------------------------------------------------------------------------- //
// -------  A container that can filld with everythin and acts as a dialog --- //
// --------------------------------------------------------------------------- //
export default function SimpleDialog(props: TSimpleDialogWithHTMLAttrs) {
  const { isOpen = false, children, themeType = 'primary', layer = 1, extenalStyle, ...htmlProps } = props;

  const dialogRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setRender] = useState(isOpen);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  // Define the fade animation for the dialog
  const fade = useSpring({
    transform: isOpen ? 'translate(-50%, -50%)' : 'translate(-50%, -40%)',
    opacity: isOpen ? 1 : 0,
    onRest: () => setRender(isOpen),
  });

  useEffect(() => {
    if (isOpen) {
      // Update the shouldRender state variable when the isOpen prop changes
      if (isOpen) setRender(true);
      // Store the currently focused element (before modal opens)
      lastFocusedElement.current = document.activeElement as HTMLElement;
    } else {
      // Return focus to the last focused element when modal closes
      if (lastFocusedElement.current) {
        lastFocusedElement.current.focus();
      }
    }
  }, [isOpen]);

  // Focus the dialog when it is rendered
  useEffect(() => {
    if (shouldRender && dialogRef.current) {
      // Delay focusing until after the animation might have completed
      const timer = setTimeout(() => {
        dialogRef?.current?.focus();
      }, 10); // Adjust the delay to match your animation duration

      return () => clearTimeout(timer);
    }
  }, [shouldRender]);

  // Render the SimpleDialog component with the appropriate props
  return shouldRender ? (
    <StyledDialog
      ref={dialogRef}
      tabIndex={-1}
      as={animated.div}
      role={'dialog'}
      style={fade}
      $themeType={themeType}
      $layer={layer}
      $externalStyle={extenalStyle}
      {...htmlProps}
    >
      {children}
    </StyledDialog>
  ) : null;
}
