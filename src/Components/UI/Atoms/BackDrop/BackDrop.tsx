import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';


const BackdropConatiner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

interface IBackDrop {
  isOpen: boolean;
  onClick?: () => void;
};
export default function BackDrop({ isOpen, onClick }: IBackDrop) {
  const [shouldRender, setRender] = useState(isOpen);

  const fade = useSpring({
    opacity: isOpen ? 0.5 : 0,
    onRest: () => setRender(isOpen),
  });

  useEffect(() => {
    if (isOpen) setRender(true);
  }, [isOpen]);

  return shouldRender ? (
    <BackdropConatiner as={animated.div} style={fade} onClick={onClick}/>
  ) : null;
}
