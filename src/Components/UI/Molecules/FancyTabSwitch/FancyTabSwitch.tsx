import React, { useState } from 'react';

import SwitchActiveIndicator from '../../Atoms/SwitchActiveIndicator/SwitchActiveIndicator';
import FancyTabSwitchButton from '../../Atoms/TabSwitchItem/FancyTabSwitchButton';
import { borderRadius, spacingPx } from '../../Design/design';
import { ItemWrapper, ULButtonSwitchList } from './FancyTabSwitch.style';
import IFancyTab from './IFancyTab.model';

// Define the different sizes for the tab switch
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

// Define the main FancyTabSwitch component
export default function FancyTabSwitch(props: IFancyTab) {
  const { switchValues, size, currentSelect, onChange, rounded, tabSpacing, themeType, outlined, activeColor, ...styleProps } = props;
  const { wide, disabled, iconAlign, textColor } = styleProps;

  // Define the state for the currently selected tab
  const [currentSelected, setCurrentSelect] = useState(currentSelect);

  // Define the function to handle the selection of a tab
  const radioChangeHandler = (position: string) => {
    const currentItem = switchValues.find((item) => item.key === position);
    setCurrentSelect(position);
    onChange && onChange(currentItem?.key!);
  };

  return (
    <>
      {/* Generate the unordered list for the tab switch */}
      <ULButtonSwitchList
        $tabSpacing={tabSpacing}
        $rounded={rounded}
        $themeType={themeType}
        $wide={wide}
        $padding={size}
        $outlined={outlined}
      >
        {/* Generate a list item for each switch value */}
        {switchValues.map((item, i) => (
          <ItemWrapper key={item.key}>
            {/* Generate the button for the switch item */}
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

            {/* Generate the switch active indicator wich is a blob or underline */}
            {i === 0 && (
              <SwitchActiveIndicator
                $outlined={outlined}
                // the radius of the switch indicator is adjusted for good looks with minus the padding of the switch
                $rounded={
                  rounded ? parseInt(borderRadius[rounded]) - parseInt(tabSwitchSizes[size || 'sm'].paddingComponent) + 'px' : undefined
                }
                $type={themeType !== 'transparent' ? 'bolb' : 'underline'}
                $itemNumber={Number(currentSelected)}
                $themeType={activeColor}
              />
            )}
          </ItemWrapper>
        ))}
      </ULButtonSwitchList>
    </>
  );
}
