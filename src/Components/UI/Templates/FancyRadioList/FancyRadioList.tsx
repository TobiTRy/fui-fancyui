import React, { useRef, useState } from 'react';

import FancyRadio from '@/Components/UI/Organisms/FancyRadio/FancyRadio';
import FancyListBox from '../../Organisms/FancyListBox/FancyListBox';
import { FancyLine } from '../../Atoms/FancyLine';

interface Item {
  title: string;
  description: string;
  itemKey: string;
}

interface FancyRadioListProps {
  items: Item[];
  name: string;
  handler?: (itemKey: string) => void;
}

export default function FancyRadioList(props: FancyRadioListProps) {
  const { items, name, handler } = props;
  const [currentItem, setCurrentSelect] = useState('1');
  const buttonRefs = useRef<React.RefObject<HTMLDivElement>[]>(items.map(() => React.createRef<HTMLDivElement>()));

  // Define the function to handle the selection of a tab
  const radioChangeHandler = (position: string) => {
    console.log(position, 'position');
    const currentItem = items.find((item) => item.itemKey === position);
    setCurrentSelect(position);
    handler && handler(currentItem?.itemKey!);
  };

  // This handles the navigation with the keyboard
  const handleKeyDown = (event: React.KeyboardEvent, itemKey: string) => {
    const currentIndex = items.findIndex((item) => item.itemKey === itemKey);

    let newIndex = -1;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      newIndex = (currentIndex + 1) % items.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      newIndex = (currentIndex - 1 + items.length) % items.length;
    }

    if (newIndex !== -1) {
      const newPosition = items[newIndex].itemKey;
      radioChangeHandler(newPosition);
      buttonRefs.current[newIndex].current?.focus();
    }
  };
  return (
    <FancyListBox role="radiogroup" tabIndex={0}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <FancyListBox.Item>
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
          </FancyListBox.Item>
          {items.length - 1 !== index && <FancyLine themeType="primary" layer={3} />}
        </React.Fragment>
      ))}
    </FancyListBox>
  );
}
