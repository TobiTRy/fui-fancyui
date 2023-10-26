import React, { useState } from 'react';

import { FancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon';
import SwitchActiveIndicator from '../../Atoms/SwitchActiveIndicator/SwitchActiveIndicator';
import { styled } from 'styled-components';

type Iitem = React.ComponentProps<typeof FancyBottomBarIcon> & { itemKey: string };

interface IBottomBarListProps {
  items: Iitem[];
  handler?: (itemKey: string) => void;
  indicatorType?: React.ComponentProps<typeof SwitchActiveIndicator>['$type'];
}

const StyledList = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ItemWrapper = styled.div`
  position: relative;
  flex-grow: 1;
`

export default function BottomBarList({ items, handler, indicatorType }: IBottomBarListProps) {
  const [currentActive, setCurrentActive] = useState('');

  // Define the function to handle the selection of a tab
  const activeHandler = (position: string) => {
    const currentItem = items.find((item) => item.itemKey === position);
    setCurrentActive(position);
    handler && handler(currentItem?.itemKey!);
  };

  return (
    <StyledList>
      {items.map((item, index) => (
        <ItemWrapper>
          <FancyBottomBarIcon key={index} active={item.itemKey === currentActive} {...item} onClick={() => activeHandler(item.itemKey)} />
          {index === 0 && <SwitchActiveIndicator $itemNumber={Number(currentActive)} $type={indicatorType ?? 'underline'} />}
        </ItemWrapper>
      ))}
    </StyledList>
  );
}
