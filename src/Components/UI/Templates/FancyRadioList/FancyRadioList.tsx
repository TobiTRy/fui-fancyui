import React, { useState } from 'react';

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
  const [currentItem, setCurrentSelect] = useState('');

  // Define the function to handle the selection of a tab
  const radioChangeHandler = (position: string) => {
    console.log(position, 'position');
    const currentItem = items.find((item) => item.itemKey === position);
    setCurrentSelect(position);
    handler && handler(currentItem?.itemKey!);
  };

  // This handles the navigation with the keyboard
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, itemKey: string) => {
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
    }
  };
  return (
    <FancyListBox>
      {items.map((item, index) => {
        console.log(item);
        return (
          <>
            <FancyListBox.Item key={index}>
              <FancyRadio
                name={name}
                id={item.itemKey}
                value={item.title}
                label={item.title}
                description={item.description}
                checked={currentItem === item.itemKey}
                onChange={() => radioChangeHandler(item.itemKey)}
                externalStyle={{ width: '100%' }}
                onKeyDown={(event) => handleKeyDown(event, item.itemKey)}
              />
            </FancyListBox.Item>
            {items.length - 1 !== index && <FancyLine themeType="primary" layer={3} />}
          </>
        );
      })}
    </FancyListBox>
  );
}