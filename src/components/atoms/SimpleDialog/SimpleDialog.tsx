import React, { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';
import { StyledDialog } from './SimpleDialog.style';

// Define the props for the SimpleDialog component
interface ISimpleDialog {
  isOpen: boolean;
  children: React.ReactNode;
  themeType?: TThemeTypes;
  layer?: TLayer;
}

// Define the SimpleDialog component
export default function SimpleDialog({ isOpen, children, themeType, layer }: ISimpleDialog) {
  const [shouldRender, setRender] = useState(isOpen);

  // Define the fade animation for the dialog
  const fade = useSpring({
    transform: isOpen ? 'translate(-50%, -50%)' : 'translate(-50%, -40%)',
    opacity: isOpen ? 1 : 0,
    onRest: () => setRender(isOpen),
  });

  // Update the shouldRender state variable when the isOpen prop changes
  useEffect(() => {
    if (isOpen) setRender(true);
  }, [isOpen]);

  // Render the SimpleDialog component with the appropriate props
  return shouldRender ? (
    <StyledDialog as={animated.div} style={fade} $themeType={themeType} $layer={layer}>
      {children}
    </StyledDialog>
  ) : null;
}
