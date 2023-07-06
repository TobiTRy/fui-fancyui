import React, { useId } from 'react';

import { IFancyTabStyle } from '../../Molecules/FancyTabSwitch/IFancyTab.model';
import { LISwitchButtonStyle } from './TabSwitchItem.style';

// ------------------------------------------------------------------ //
// ------------- main component for the tab (li item) --------------- //
// ------------------------------------------------------------------ //
export default function FancyTabSwitchButton(props: IFancyTabStyle) {
  const { disabled, itemObject, selected, handler } = props;

  const id = useId();

  return (
    <LISwitchButtonStyle {...props}>
      <input
        id={id + '_' + itemObject.key}
        disabled={disabled}
        name="FancyButtonSwitcher"
        type="radio"
        checked={selected}
        onChange={() => handler(itemObject.key)}
      />

      <label htmlFor={id + '_' + itemObject.key}>
        {itemObject.icon && <i>{itemObject.icon}</i>}
        {itemObject.label && <span>{itemObject.label}</span>}
      </label>
    </LISwitchButtonStyle>
  );
}
