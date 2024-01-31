import React, { useRef, useState } from 'react';

import { Fieldset } from '@/components/molecules/Fieldset';
import { FancyListBox } from '@/components/organisms/FancyListBox';
import { FancyRadio } from '@/components/organisms/FancyRadio';
import { FancyRadioListProps } from './FancyRadioList.model';

// --------------------------------------------------------------------------- //
// ------- The FancyRadioList renders a List of RadioButtons dynamicly ------- //
// --------------------------------------------------------------------------- //
export default function FancyRadioList(props: FancyRadioListProps) {
  const { items, name, handler, themeType, layer, ...fieldSetProps } = props;
  const [currentItem, setCurrentSelect] = useState('1');
  const buttonRefs = useRef<React.RefObject<HTMLDivElement>[]>(items.map(() => React.createRef<HTMLDivElement>()));

  // Define the function to handle the selection of a tab
  const radioChangeHandler = (position: string) => {
    const currentItem = items.find((item) => item.itemKey === position);
    setCurrentSelect(position);
    handler && handler(currentItem?.itemKey!);
  };

  // This handles the navigation with the keyboard arrows
  const handleKeyDown = (event: React.KeyboardEvent, itemKey: string) => {
    const currentIndex = items.findIndex((item) => item.itemKey === itemKey);

    let newIndex = -1; // -1 means no change
    // Check if the user pressed the arrow keys
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      newIndex = (currentIndex + 1) % items.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      newIndex = (currentIndex - 1 + items.length) % items.length;
    }

    // Set the focus on the new item
    if (newIndex !== -1) {
      const newPosition = items[newIndex].itemKey;
      radioChangeHandler(newPosition);
      buttonRefs.current[newIndex].current?.focus();
    }
  };

  return (
    // Give the list with the Fieldset a label
    <Fieldset {...fieldSetProps}>
      {/* The ListBox gives the style */}
      <FancyListBox role="radiogroup" themeType={themeType} layer={layer} sizeC="sm">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {/* Render the Radio with a Label and Description */}
            <FancyRadio
              name={name}
              id={item.itemKey}
              value={item.title}
              ref={buttonRefs.current[index]}
              label={item.title}
              description={item.description}
              checked={currentItem === item.itemKey}
              onClick={() => radioChangeHandler(item.itemKey)}
              onKeyDown={(e) => handleKeyDown(e, item.itemKey)}
              externalStyle={{ width: '100%' }}
              aria-checked={item.itemKey === currentItem}
              tabIndex={item.itemKey === currentItem ? 0 : -1}
            />
          </React.Fragment>
        ))}
      </FancyListBox>
    </Fieldset>
  );
}
