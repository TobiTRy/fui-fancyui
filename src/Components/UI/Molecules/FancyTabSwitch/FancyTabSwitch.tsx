import React, { useState } from 'react';

import styled from 'styled-components';

import FancyTabSwitchButton from '../../Atoms/TabSwitchItem/FancyTabSwitchButton';
import IFancyTab from './IFancyTab.model';
import { ULButtonSwitchList } from './FancyTabSwitch.style';
import { TUiColorsType } from '../../Design/color/designColor';
import { spacingPx } from '../../Design/design';
import { TypographyList } from '../../Atoms/Typography/Typography';

export const tabSwitchSizes = {
  sm: {
    paddingComponent: '4px',
  },
  md: {
    paddingComponent: spacingPx.xs,
  },
  lg: {
    paddingComponent: spacingPx.md,
  },
};

const ItemWrapper = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  list-style: none;
`;

const ActiveSwitchIndicator = styled.div<{ theme: TUiColorsType; $itemNumber: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.accent[0]};
  border-radius: 10px;
  border-radius: 50px;
  transform: ${({ $itemNumber }) =>
    $itemNumber ? `translateX(calc(${($itemNumber - 1) * 100}% + ${($itemNumber - 1) * 2 + 'px'}))` : 'translateX(0)'};
  transition: transform 0.2s ease;
`;

// ------------------------------------------------------------------ //
// ------ the main react component to generate the TabSwitch -------- //
// ------------------------------------------------------------------ //
export default function FancyTabSwitch(props: IFancyTab) {
  const { switchValues, size, currentSelect, handler, rounded, tabSpacing, ...styleProps } = props;
  const { wide, disabled, transparent, roundedTabs, icon, iconAlign, textColor, selected } = styleProps;

  console.log(size);

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
        $transparent={transparent}
        $wide={wide}
        padding={size}
      >
        {/* this map generates for each switchvalue a new List item */}
        {switchValues.map((item, i) => (
          <ItemWrapper>
            <FancyTabSwitchButton
              key={i}
              disabled={disabled}
              wide={wide}
              size={size}
              transparent={transparent}
              textColor={textColor}
              iconAlign={iconAlign}
              onClick={() => radioChangeHandler(item.key)}
              itemObject={item}
              selected={item.key === currentSelected}
            />
            {i === 0 && !transparent && <ActiveSwitchIndicator $itemNumber={Number(currentSelected)} />}
          </ItemWrapper>
        ))}
      </ULButtonSwitchList>
    </>
  );
}
