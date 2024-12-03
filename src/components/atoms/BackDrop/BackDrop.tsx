'use client';

import { useEffect, useRef } from 'react';
import { TStyledPrefixAndPicker } from '@/types';
import { styled } from 'styled-components';

import { TBackDrop } from './TBackdrop.model';

// --------------------------------------------------------------------------- //
// ------- Only a backdrop for some components with a onclick listener ------- //
// --------------------------------------------------------------------------- //
export default function BackDrop(props: TBackDrop) {
  const { isOpen, onClick, externalStyle } = props;
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
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
    }
  }, [isOpen]);

  return <BackdropContainer ref={backdropRef} onClick={onClick} $externalStyle={externalStyle} />;
}

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
const BackdropContainer = styled.div<TStyledPrefixAndPicker<TBackDrop, 'externalStyle'>>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  opacity: 0; // Start with opacity 0
  transition: opacity 0.3s ease 0s;
  ${({ $externalStyle }) => $externalStyle}
`;
