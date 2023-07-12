import React, { useState } from 'react';

import FancyTabSwitchButton from '../../Atoms/TabSwitchItem/FancyTabSwitchButton';
import IFancyTab from './IFancyTab.model';
import { ULButtonSwitchList } from './FancyTabSwitch.style';

// ------------------------------------------------------------------ //
// ------ the main react component to generate the TabSwitch -------- //
// ------------------------------------------------------------------ //
export default function FancyTabSwitch(props: IFancyTab) {
  const { switchValues, currentSelect, handler, rounded, tabSpacing, ...styleProps } = props;
  const { wide, disabled, transparent, roundedTabs, icon, iconAlign, textColor, selected } = styleProps;

  //the props for the listcomponent
  const listProps = {
    wide: props.wide,
    rounded,
    roundedTabs: props.roundedTabs,
    tabSpacing,
    transparent: props.transparent,
    disabled: props.disabled,
  };

  //the state in which is saved the current sékected tab as sting (key)
  const [currentSelected, setCurrentSelect] = useState(currentSelect);

  //this function handles the current selected tab and sends it to the parent
  const radioChangeHandler = (position: string) => {
    let currentItem = switchValues.find((item) => item.key === position);
    setCurrentSelect(position);
    handler(currentItem?.key!);
  };

  return (
    <div>
      {/* the ul wich is generated on the top of this file  */}
      <ULButtonSwitchList $tabSpacing={tabSpacing} $roundedTabs={roundedTabs} $rounded={rounded} $transparent={transparent} $wide={wide}>
        {/* this map generates for each switchvalue a new List item */}
        {switchValues.map((item, i) => (
          <React.Fragment key={i}>
            {/* const { disabled, itemObject, selected, handler, transparent, wide, textColor, iconAlign } = props; */}
            <FancyTabSwitchButton
              disabled={disabled}
              wide={wide}
              transparent={transparent}
              textColor={textColor}
              iconAlign={iconAlign}
              itemObject={item}
              selected={item.key === currentSelected}
              handler={radioChangeHandler}
            />
          </React.Fragment>
        ))}
      </ULButtonSwitchList>
    </div>
  );
}
