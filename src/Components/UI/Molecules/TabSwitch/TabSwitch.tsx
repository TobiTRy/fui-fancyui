import React, { useRef, useState } from 'react';

import { ItemWrapper, ULButtonSwitchList, tabSwitchSizes } from './TabSwitch.style';
import FancyTabSwitchButton from '../FancyTabSwitchButton/FancyTabSwitchButton';
import { borderRadius } from '../../../Design/designSizes';
import SwitchActiveIndicator from '../../../Atoms/SwitchActiveIndicator/SwitchActiveIndicator';
import { ITabSwitchProps } from './TabSwitch.model';

// --------------------------------------------------------------------------- //
// ------------ The tap SwitchComponent to slect specifc values -------------- //
// --------------------------------------------------------------------------- //
export default function TabSwitch(props: ITabSwitchProps) {
  const {
    values,
    layer,
    themeType,
    textColor,
    size,
    wide,
    disabled,
    tabSpacing,
    rounded,
    direction,
    outlined,
    currentSelect,
    handler,
    iconAlign,
    activeColor,
  } = props;
  // Define the state for the currently selected tab
  const buttonRefs = useRef<React.RefObject<HTMLDivElement>[]>(values.map(() => React.createRef<HTMLDivElement>()));
  const [currentSelected, setCurrentSelect] = useState(currentSelect);

  // Define the function to handle the selection of a tab
  const radioChangeHandler = (position: string) => {
    const currentItem = values.find((item) => item.itemKey === position);
    setCurrentSelect(position);
    handler && handler(currentItem?.itemKey!);
  };

  // This handles the navigation with the keyboard
  const handleKeyDown = (event: React.KeyboardEvent, itemKey: string) => {
    const currentIndex = values.findIndex((item) => item.itemKey === itemKey);
    let newIndex = -1;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      newIndex = (currentIndex + 1) % values.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      newIndex = (currentIndex - 1 + values.length) % values.length;
    }

    if (newIndex !== -1) {
      const newPosition = values[newIndex].itemKey;
      radioChangeHandler(newPosition);
      buttonRefs.current[newIndex].current?.focus();
    }
  };

  return (
    <ULButtonSwitchList
      $tabSpacing={tabSpacing}
      $rounded={rounded}
      $themeType={themeType}
      $wide={wide}
      $outlined={outlined}
      $direction={direction}
      role="radiogroup"
      $layer={layer}
    >
      {/* Generate a list item for each switch value */}
      {values.map((item, i) => (
        <ItemWrapper key={item.itemKey}>
          {/* Generate the button for the switch item */}
          <FancyTabSwitchButton
            disabled={disabled}
            wide={wide}
            size={size}
            themeType={textColor}
            iconAlign={iconAlign}
            {...item}
            ref={buttonRefs.current[i]}
            selected={item.itemKey === currentSelected}
            aria-checked={item.itemKey === currentSelected}
            onClick={() => radioChangeHandler(item.itemKey)}
            onKeyDown={(e) => handleKeyDown(e, item.itemKey)}
            tabIndex={item.itemKey === currentSelected ? 0 : -1} // Manage focus
          />
          {/* Generate the switch active indicator wich is a blob or underline */}
          {i === 0 && (
            <SwitchActiveIndicator
              $layer={layer}
              $outlined={outlined}
              // the radius of the switch indicator is adjusted for good looks with minus the padding of the switch
              $rounded={
                rounded ? parseInt(borderRadius[rounded]) - parseInt(tabSwitchSizes[size || 'sm'].paddingComponent) + 'px' : undefined
              }
              $type={themeType !== 'transparent' ? 'bolb' : 'underline'}
              $itemNumber={Number(currentSelected)}
              $themeType={activeColor}
              $direction={direction}
              $tabSpacing={tabSpacing}
            />
          )}
        </ItemWrapper>
      ))}
    </ULButtonSwitchList>
  );
}
