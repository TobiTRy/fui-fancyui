import React, { useId, useRef, useState } from 'react';

import SwitchActiveIndicator from '../../Atoms/SwitchActiveIndicator/SwitchActiveIndicator';
import FancyTabSwitchButton from '../../Atoms/TabSwitchItem/FancyTabSwitchButton';
import { borderRadius, spacingPx } from '../../Design/design';
import { ItemWrapper, ULButtonSwitchList } from './FancyTabSwitch.style';
import IFancyTab from './IFancyTab.model';
import Fieldset from '../../Atoms/Fieldset/Fieldset';

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
  const { switchValues, size, currentSelect, onChange, rounded, tabSpacing, themeType, outlined, activeColor, label, ...styleProps } =
    props;
  const { wide, disabled, iconAlign, textColor } = styleProps;

  // Define the state for the currently selected tab
  const [currentSelected, setCurrentSelect] = useState(currentSelect);
  const buttonRefs = useRef<React.RefObject<HTMLDivElement>[]>(switchValues.map(() => React.createRef<HTMLDivElement>()));
  const id = useId();

  // Define the function to handle the selection of a tab
  const radioChangeHandler = (position: string) => {
    const currentItem = switchValues.find((item) => item.key === position);
    setCurrentSelect(position);
    onChange && onChange(currentItem?.key!);
  };

  // This handles the navigation with the keyboard
  const handleKeyDown = (event: React.KeyboardEvent, itemKey: string) => {
    const currentIndex = switchValues.findIndex((item) => item.key === itemKey);
    let newIndex = -1;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      newIndex = (currentIndex + 1) % switchValues.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      newIndex = (currentIndex - 1 + switchValues.length) % switchValues.length;
    }

    if (newIndex !== -1) {
      const newPosition = switchValues[newIndex].key;
      radioChangeHandler(newPosition);
      buttonRefs.current[newIndex].current?.focus();
    }
  };

  /* Generate the unordered list for the tab switch */
  return (
    <Fieldset label='Test'>
      <ULButtonSwitchList
        $tabSpacing={tabSpacing}
        $rounded={rounded}
        $themeType={themeType}
        $wide={wide}
        $padding={size}
        $outlined={outlined}
        role="radiogroup"
        id={id}
      >
        {/* Generate a list item for each switch value */}
        {switchValues.map((item, i) => (
          <ItemWrapper key={item.key}>
            {/* Generate the button for the switch item */}
            <FancyTabSwitchButton
              ref={buttonRefs.current[i]}
              aria-checked={item.key === currentSelected}
              disabled={disabled}
              wide={wide}
              size={size}
              themeType={themeType}
              textColor={textColor}
              iconAlign={iconAlign}
              onClick={() => radioChangeHandler(item.key)}
              itemObject={item}
              selected={item.key === currentSelected}
              tabIndex={item.key === currentSelected ? 0 : -1} // Manage focus
              onKeyDown={(e) => handleKeyDown(e, item.key)}
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
    </Fieldset>
  );
}
