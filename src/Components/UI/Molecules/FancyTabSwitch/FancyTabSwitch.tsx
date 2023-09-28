import React, { useState } from 'react';

import styled, { css } from 'styled-components';

import FancyTabSwitchButton from '../../Atoms/TabSwitchItem/FancyTabSwitchButton';
import IFancyTab from './IFancyTab.model';
import { ULButtonSwitchList } from './FancyTabSwitch.style';
import { TUiColorsType } from '../../Design/color/designColor';
import { spacing, spacingPx } from '../../Design/design';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import SwitchActiveIndicator from '../../Atoms/SwitchActiveIndicator/SwitchActiveIndicator';

export const tabSwitchSizes = {
  sm: {
    paddingComponent: '4px',
  },
  md: {
    paddingComponent: spacingPx.xs,
  },
  lg: {
    paddingComponent: spacingPx.sm,
  },
};

const ItemWrapper = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  list-style: none;
`;


/* // ($itemNumber - 1) * 100}% + ${($itemNumber - 1) * 2 + 'px'})) */

// ------------------------------------------------------------------ //
// ------ the main react component to generate the TabSwitch -------- //
// ------------------------------------------------------------------ //
export default function FancyTabSwitch(props: IFancyTab) {
  const { switchValues, size, currentSelect, handler, rounded, tabSpacing, themeType, ...styleProps } = props;
  const { wide, disabled, roundedTabs, icon, iconAlign, textColor, outlined } = styleProps;

  //the state in which is saved the current sékected tab as sting (key)
  const [currentSelected, setCurrentSelect] = useState(currentSelect);

  //this function handles the current selected tab and sends it to the parent
  const radioChangeHandler = (position: string) => {
    const currentItem = switchValues.find((item) => item.key === position);
    setCurrentSelect(position);
    handler && handler(currentItem?.key!);
  };

  return (
    <>
      {/* the ul wich is generated on the top of this file  */}
      <ULButtonSwitchList
        $tabSpacing={tabSpacing}
        $roundedTabs={roundedTabs}
        $rounded={rounded}
        $themeType={themeType}
        $wide={wide}
        $padding={size}
        $outlined={outlined}
      >
        {/* this map generates for each switchvalue a new List item */}
        {switchValues.map((item, i) => (
          <ItemWrapper>
            <FancyTabSwitchButton
              key={i}
              disabled={disabled}
              wide={wide}
              size={size}
              themeType={themeType}
              textColor={textColor}
              iconAlign={iconAlign}
              onClick={() => radioChangeHandler(item.key)}
              itemObject={item}
              selected={item.key === currentSelected}
            />
            {i === 0 && <SwitchActiveIndicator $outlined $rounded='xl' $type={'bolb'} $itemNumber={Number(currentSelected)} $themeType={themeType} />}
          </ItemWrapper>
        ))}
      </ULButtonSwitchList>
    </>
  );
}
