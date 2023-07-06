import React, { useState } from 'react';

import FancyTabSwitchButton from '../../Atoms/TabSwitchItem/TabSwitchItem';
import IFancyTab from './IFancyTab.model';
import { ULButtonSwitchList } from './FancyTabSwitch.style';

// ------------------------------------------------------------------ //
// ------ the main react component to generate the TabSwitch -------- //
// ------------------------------------------------------------------ //
export default function FancyTabSwitch(props: IFancyTab) {
  const { switchValues, currentSelect, handler, rounded, tabSpacing, ...childValues } = props;

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
      <ULButtonSwitchList {...listProps}>
        {/* this map generates for each switchvalue a new List item */}
        {switchValues.map((item, i) => (
          <React.Fragment key={i}>
            <FancyTabSwitchButton {...childValues} itemObject={item} selected={item.key === currentSelected} handler={radioChangeHandler} />
          </React.Fragment>
        ))}
      </ULButtonSwitchList>
    </div>
  );
}
