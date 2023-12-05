import { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { styled } from 'styled-components';

interface IBackDrop {
  isOpen: boolean;
  onClick?: () => void;
}
// --------------------------------------------------------------------------- //
// ------- Only a backdrop for some components with a onclick listener ------- //
// --------------------------------------------------------------------------- //
export default function BackDrop({ isOpen, onClick }: IBackDrop) {
  const [shouldRender, setRender] = useState(isOpen);

  const fade = useSpring({
    opacity: isOpen ? 0.5 : 0,
    onRest: () => setRender(isOpen),
  });

  useEffect(() => {
    if (isOpen) setRender(true);
  }, [isOpen]);

  return shouldRender ? <BackdropContainer as={animated.div} style={fade} onClick={onClick} /> : null;
}

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
