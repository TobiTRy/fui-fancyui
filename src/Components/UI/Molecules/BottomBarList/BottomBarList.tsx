import React, { useState } from 'react';

import { FancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon';
import SwitchActiveIndicator from '../../Atoms/SwitchActiveIndicator/SwitchActiveIndicator';

type Iitem = React.ComponentProps<typeof FancyBottomBarIcon> & { itemKey: string }; 

interface IBottomBarListProps {
  items: Iitem[];
  handler?: (itemKey: string) => void;
}

export default function BottomBarList({ items, handler }: IBottomBarListProps) {
  const [currentActive, setCurrentActive] = useState('');

  // Define the function to handle the selection of a tab
  const activeHandler = (position: string) => {
    const currentItem = items.find((item) => item.itemKey === position);
    setCurrentActive(position);
    handler && handler(currentItem?.itemKey!);
  };

  return (
    <>
      {items.map((item, index) => (
        <div>
          <FancyBottomBarIcon key={index} {...item} onClick={() => activeHandler(item.itemKey)} />
          {index === 0 && <SwitchActiveIndicator $itemNumber={Number(currentActive)} $type="underline" />}
        </div>
      ))}
    </>
  );
}
