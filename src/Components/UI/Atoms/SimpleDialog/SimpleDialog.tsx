import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { animated, useSpring } from '@react-spring/web';

import { uiColors, borderRadius, spacingPx } from '../../Design/design';
import { boxShadow } from '../../Design/shadows';

const StyledDialog = styled(animated.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${spacingPx.xl};
  background-color: ${uiColors.primary[1]};
  border-radius: ${borderRadius.lg};
  border: none;
  width: 70%;
  max-height: 85%;
  color: ${uiColors.secondary[0]};
  z-index: 1000;
  ${boxShadow.lg}
`;

// --------------------------------------------------------------------------- //
// ---------- The SimpleDialog that displays the Box and the Animation ------- //
// --------------------------------------------------------------------------- //
interface ISimpleDialog {
  isOpen: boolean;
  children: React.ReactNode;
}
export default function SimpleDialog({ isOpen, children }: ISimpleDialog) {
  const [shouldRender, setRender] = useState(isOpen);

  const fade = useSpring({
    transform: isOpen ? 'translate(-50%, -50%)' : 'translate(-50%, -40%)',
    opacity: isOpen ? 1 : 0,
    onRest: () => setRender(isOpen),
  });

  useEffect(() => {
    if (isOpen) setRender(true);
  }, [isOpen]);

  return shouldRender ? (
    <StyledDialog as={animated.div} style={fade}>
      {children}
    </StyledDialog>
  ) : null;
}
