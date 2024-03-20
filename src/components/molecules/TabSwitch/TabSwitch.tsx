import React, { useRef, useState } from 'react';

import { ItemWrapper, ULButtonSwitchList, tabSwitchSizes } from './TabSwitch.style';
import { FancyTabSwitchButton } from '@/components/molecules/FancyTabSwitchButton';
import { borderRadius } from '@/design/theme/designSizes';
import { SwitchActiveIndicator } from '@/components/atoms/SwitchActiveIndicator';
import { TTabSwitch } from './TTabSwitch.model';

// --------------------------------------------------------------------------- //
// ------------ The tap SwitchComponent to slect specifc values -------------- //
// --------------------------------------------------------------------------- //
export default function TabSwitch(props: TTabSwitch) {
  const {
    values,
    textColor,
    sizeC,
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
    indicatorType,
  } = props;

  // Define the state for the currently selected tab
  const buttonRefs = useRef<React.RefObject<HTMLDivElement>[]>(values.map(() => React.createRef<HTMLDivElement>()));
  const [currentSelected, setCurrentSelect] = useState(currentSelect);

  // Define the function to handle the selection of a tab
  const radioChangeHandler = (position: string) => {
    const currentItem = values.find((item) => item.itemKey === position);
    setCurrentSelect(position);
    handler?.(currentItem?.itemKey!);
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
      $wide={wide}
      $direction={direction}
      $disabled={disabled}
      role="radiogroup"
    >
      {/* Generate a list item for each switch value */}
      {values.map((item, i) => (
        <ItemWrapper key={item.itemKey}>
          {/* Generate the button for the switch item */}
          <FancyTabSwitchButton
            sizeC={sizeC}
            disabled={disabled}
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
              outlined={outlined}
              // the radius of the switch indicator is adjusted for good looks with minus the padding of the switch
              rounded={
                rounded
                  ? parseInt(borderRadius[rounded]) - parseInt(tabSwitchSizes[sizeC || 'sm'].paddingComponent) + 'px'
                  : undefined
              }
              type={indicatorType ?? 'bolb'}
              itemNumber={values.findIndex((item) => item.itemKey === currentSelected)}
              themeType={activeColor}
              direction={direction}
              tabSpacing={tabSpacing}
            />
          )}
        </ItemWrapper>
      ))}
    </ULButtonSwitchList>
  );
}
