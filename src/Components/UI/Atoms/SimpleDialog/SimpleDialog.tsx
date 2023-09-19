import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { animated, useSpring } from '@react-spring/web';
import { borderRadius, spacingPx } from '../../Design/design';
import { boxShadow } from '../../Design/shadows';
import { TUiColorsType, TthemeColorGroup } from '../../Design/color/designColor';
import checkThemeOrColor from '../../Design/color/ckeckThemeOrColor';

// Define the styled component for the dialog
const StyledDialog = styled(animated.div)<{theme: TUiColorsType, $backgroundColor?: string | TthemeColorGroup}>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${spacingPx.xl};
  border-radius: ${borderRadius.lg};
  border: none;
  width: 70%;
  max-height: 85%;
  background-color: ${({theme, $backgroundColor}) => $backgroundColor ? checkThemeOrColor($backgroundColor) : theme.primary[1]};
  color: ${({theme}) => theme.secondary[0]};
  z-index: 1000;
  ${boxShadow.lg}
`;

// Define the props for the SimpleDialog component
interface ISimpleDialog {
  isOpen: boolean;
  children: React.ReactNode;
  backgroundColor?: string | TthemeColorGroup;
}

// Define the SimpleDialog component
export default function SimpleDialog({ isOpen, children, backgroundColor }: ISimpleDialog) {
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
    <StyledDialog as={animated.div} style={fade} $backgroundColor={backgroundColor}>
      {children}
    </StyledDialog>
  ) : null;
}