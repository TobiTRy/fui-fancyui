import React, { useState } from 'react';

import FancyTabSwitchButton from '../../Atoms/TabSwitchItem/FancyTabSwitchButton';
import IFancyTab from './IFancyTab.model';
import { ULButtonSwitchList } from './FancyTabSwitch.style';
import styled from 'styled-components';
import { TUiColorsType } from '../../Design/color/designColor';

// ------------------------------------------------------------------ //
// ------ the main react component to generate the TabSwitch -------- //
// ------------------------------------------------------------------ //
const ItemWrapper = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  list-style: none;
`;

const ActiveSwitchIndicator = styled.div<{theme: TUiColorsType; itemNumber: number}>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.accent[0]};
  border-radius: 10px;
  position: absolute;
  top: 0;
  border-radius: 50px;
  left: 0;
  transform: ${({itemNumber}) => itemNumber ? `translateX(${(itemNumber - 1) * 100}%)` : 'translateX(0)' };
  transition: transform 0.2s ease;
`;


export default function FancyTabSwitch(props: IFancyTab) {
  const { switchValues, currentSelect, handler, rounded, tabSpacing, ...styleProps } = props;
  const { wide, disabled, transparent, roundedTabs, icon, iconAlign, textColor, selected } = styleProps;

  //the state in which is saved the current sékected tab as sting (key)
  const [currentSelected, setCurrentSelect] = useState(currentSelect);

  //this function handles the current selected tab and sends it to the parent
  const radioChangeHandler = (position: string) => {
    const currentItem = switchValues.find((item) => item.key === position);
    setCurrentSelect(position);
    handler && handler(currentItem?.key!);
  };

  console.log('currentSelected', currentSelected);

  return (
    <>
      {/* the ul wich is generated on the top of this file  */}
      <ULButtonSwitchList $tabSpacing={tabSpacing} $roundedTabs={roundedTabs} $rounded={rounded} $transparent={transparent} $wide={wide}>
        {/* this map generates for each switchvalue a new List item */}
        {switchValues.map((item, i) => (
          <ItemWrapper>
            <FancyTabSwitchButton
              key={i}
              disabled={disabled}
              wide={wide}
              transparent={transparent}
              textColor={textColor}
              iconAlign={iconAlign}
              itemObject={item}
              selected={item.key === currentSelected}
          
              handler={radioChangeHandler}
            />
            {i === 0 && <ActiveSwitchIndicator itemNumber={Number(currentSelected)} />}
          </ItemWrapper>
        ))}
      </ULButtonSwitchList>
    </>
  );
}
