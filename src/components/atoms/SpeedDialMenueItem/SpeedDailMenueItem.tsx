import React from 'react';

import { Typography } from '@/components/atoms/Typography';
import { Label, MenuItem, MenueItemContainer } from './SpeedDailMenueItem.style';

//the props only for the button
export type TMenueButtonProps = {
  label?: string;
  icon: string | number | JSX.Element;
  index?: number;
  onClick?: () => void;
};

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
    <MenueItemContainer $isOpen={isOpen} $index={index || 0}>
      <MenuItem aria-label={label} onClick={onClick}>
        {icon}
      </MenuItem>
      {label && !hideLabel && (
        <Typography type="inlineElement" variant="label" style={Label}>
          {label}
        </Typography>
      )}
    </MenueItemContainer>
  );
}
