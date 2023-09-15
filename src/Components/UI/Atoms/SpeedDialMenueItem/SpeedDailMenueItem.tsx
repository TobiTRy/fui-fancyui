import React from 'react';

import { Typography } from '../Typography';
import { Label, MenuItem } from './SpeedDailMenueItem.style';

//the props only for the button
export type TMenueButtonProps = {
  label?: string;
  value: string | number | JSX.Element;
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
  const { label, value, hideLabel, labelAlign, isOpen, onClick } = props;

  return (
    <>
      <MenuItem aria-label={label} onClick={onClick}>{value}</MenuItem>
      {label && !hideLabel && (
        <Typography type="inlineElement" variant="label" $isOpen={isOpen} $labelAlign={labelAlign} style={Label}>
          {label}
        </Typography>
      )}
    </>
  );
}
