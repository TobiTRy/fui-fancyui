import React, { useId } from 'react';

import { IFancyTabStyle } from '../../Molecules/FancyTabSwitch/IFancyTab.model';
import { LISwitchButtonStyle } from './FancyTabSwitchButton.style';
import Typography from '../Typography/Typography';

// ------------------------------------------------------------------ //
// ------------- main component for the tab (li item) --------------- //
// ------------------------------------------------------------------ //
export default function FancyTabSwitchItem(props: IFancyTabStyle) {
  const { disabled, itemObject, selected, handler, transparent, wide, textColor, iconAlign } = props;

  const id = useId();

  return (
    <LISwitchButtonStyle $transparent={transparent} $wide={wide} $textColor={textColor} $iconAlign={iconAlign}>
      <input
        id={id + '_' + itemObject.key}
        disabled={disabled}
        name={'FancyButtonSwitcher' + id}
        type="radio"
        checked={selected}
        onChange={() => handler(itemObject.key)}
      />
      <Typography htmlFor={id + '_' + itemObject.key} type="label">
        {itemObject.icon && <i>{itemObject.icon}</i>}
        {itemObject.label && <Typography type='content' weight='bold' variant='button'>{itemObject.label}</Typography>}
      </Typography>
    </LISwitchButtonStyle>
  );
}
