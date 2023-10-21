import React, { useRef, useState } from 'react';

import { ItemWrapper, ULButtonSwitchList } from './TabSwitch.style';
import FancyTabSwitchButton from '../FancyTabSwitchButton/FancyTabSwitchButton';
import { borderRadius, spacingPx } from '../../Design/design';
import SwitchActiveIndicator from '../../Atoms/SwitchActiveIndicator/SwitchActiveIndicator';
import { ITabSwitchProps } from './TabSwitch.model';


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
    id,
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
    const currentItem = values.find((item) => item.key === position);
    setCurrentSelect(position);
    handler && handler(currentItem?.key!);
  };

  // This handles the navigation with the keyboard
  const handleKeyDown = (event: React.KeyboardEvent, itemKey: string) => {
    const currentIndex = values.findIndex((item) => item.key === itemKey);
    let newIndex = -1;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      newIndex = (currentIndex + 1) % values.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      newIndex = (currentIndex - 1 + values.length) % values.length;
    }

    if (newIndex !== -1) {
      const newPosition = values[newIndex].key;
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
      id={id}
    >
      {/* Generate a list item for each switch value */}
      {values.map((item, i) => (
        <ItemWrapper key={item.key}>
          {/* Generate the button for the switch item */}
          <FancyTabSwitchButton
            ref={buttonRefs.current[i]}
            aria-checked={item.key === currentSelected}
            disabled={disabled}
            wide={wide}
            size={size}
            themeType={textColor}
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
              $direction={direction}
              $tabSpacing={tabSpacing}
            />
          )}
        </ItemWrapper>
      ))}
    </ULButtonSwitchList>
  );
}
