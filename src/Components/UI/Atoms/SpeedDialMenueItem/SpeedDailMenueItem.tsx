import React from 'react';
import { styled } from 'styled-components';

import { Typography } from '../Typography';
import { Label, MenuItem } from './SpeedDailMenueItem.style';
import { boxShadow } from '../../Design/shadows';


export const MenueItemContainer = styled.div<{ $isOpen?: boolean; $index: number }>`
  position: absolute;
  left: 50%;
  border-radius: 50%;
  bottom: ${({ $index }) => `calc(${($index + 1) * 60}px)`};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0) scale(1) translateX(-50%)' : `translateY(50px) scale(0) translateX(-50%)`)};
  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
  transition-delay: ${({ $isOpen, $index }) => ($isOpen ? 0.1 * $index : 0.1 * (2 - $index))}s;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transform: translate(-50%);
  height: 40px;
  width: 40px;
  ${boxShadow.sm};
`;


//the props only for the button
export type TMenueButtonProps = {
  label?: string;
  icon: string | number | JSX.Element;
  index?: number;
  onClick?: () => void;
}


// the props for the complete component
export type TMenueItemProps = {
  labelAlign?: 'left' | 'right';
  hideLabel?: boolean;
  isOpen?: boolean;
};

export type ISpeedDailMenueItem = TMenueButtonProps & TMenueItemProps;

// --------------------------------------------------------------------------- //
// ---------- Component that handles the Buttonlist and the opening ---------- //
// --------------------------------------------------------------------------- //
export default function SpeedDailMenueItem(props: ISpeedDailMenueItem) {
  const { label, icon, hideLabel, isOpen, onClick, index } = props;

  return (
    <MenueItemContainer $isOpen={isOpen} $index={index || 0} >
      <MenuItem aria-label={label} onClick={onClick}>{icon}</MenuItem>
      {label && !hideLabel && (
        <Typography type="inlineElement" variant="label" style={Label}>
          {label}
        </Typography>
      )}
    </MenueItemContainer>
  );
}
