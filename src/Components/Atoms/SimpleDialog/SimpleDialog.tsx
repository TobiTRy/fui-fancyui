import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { animated, useSpring } from '@react-spring/web';

import { TThemeTypes } from '@/components/core/interface/TUiColors';
import { TLayer } from '@/components/core/interface/TLayer';
import getColorsForComponent from '../../design/color/colorCalculatorForComponent/colorCalculatorForComponet';
import { TTheme } from '@/components/core/interface/TTheme';

// Define the styled component for the dialog
const StyledDialog = styled(animated.div)<{ theme: TTheme; $themeType?: TThemeTypes; $layer?: TLayer }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: none;
  width: 70%;
  max-height: 85%;
  ${({ theme, $themeType = 'primary', $layer = 1 }) => getColorsForComponent({ theme, $themeType, $layer })}
  z-index: 1000;
`;

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
