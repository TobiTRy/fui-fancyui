import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface IBackDrop {
  isOpen: boolean;
  onClick?: () => void;
}
// --------------------------------------------------------------------------- //
// ------- Only a backdrop for some components with a onclick listener ------- //
// --------------------------------------------------------------------------- //
export default function BackDrop({ isOpen, onClick }: IBackDrop) {
  const [shouldRender, setRender] = useState(isOpen);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isOpen) {
      setRender(true);
      // Trigger the animation after the component has mounted
      requestAnimationFrame(() => {
        if (backdropRef.current) {
          backdropRef.current.style.opacity = '0.5';
        }
      });
    } else {
      // Fade out before unmounting
      if (backdropRef.current) {
        backdropRef.current.style.opacity = '0';
      }
      timeoutId = setTimeout(() => setRender(false), 300);
    }

    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  return shouldRender ? <BackdropContainer ref={backdropRef} onClick={onClick} /> : null;
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
  opacity: 0; // Start with opacity 0
  transition: opacity 0.3s ease 0s;
`;
