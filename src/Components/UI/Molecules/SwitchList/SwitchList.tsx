import React, { useEffect, useState } from 'react';
import { CSSProp } from 'styled-components';

import SwitchActiveIndicator from '../../Atoms/SwitchActiveIndicator/SwitchActiveIndicator';
import { ItemWrapper, StyledList } from './SwitchList.style';

interface IBottomBarListProps {
  children: React.ReactNode;
  whichIndexIsSelected?: number;
  handler?: (activeKey: number) => void;
  indicatorType?: React.ComponentProps<typeof SwitchActiveIndicator>['$type'];
  externalStyle?: CSSProp;
}

interface IKey  {
  uniquekey: string;
} 
// --------------------------------------------------------------------------- //
// -------------- The Switch List Indicates wich item is active -------------- //
// --------------------------------------------------------------------------- //
export default function SwitchList({ handler, indicatorType, children, whichIndexIsSelected}: IBottomBarListProps) {
  const [currentActive, setCurrentActive] = useState('');

  const activeHandler = (uniqueKey: string) => {
    setCurrentActive(uniqueKey);
    handler && handler(Number(uniqueKey));
  };

  useEffect(() => {
    setCurrentActive(`${whichIndexIsSelected ? whichIndexIsSelected + 1 : 1}`);
  }, [whichIndexIsSelected]);

  return (
    <StyledList>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          // Generate a unique key (or use any other unique identifier logic)
          const uniqueKey = `${index + 1}`;

          // Clone the child and add the uniqueKey prop
          const clonedChild = React.cloneElement(child as React.ReactElement<IKey>, { 'uniquekey': uniqueKey });

          return (
            <ItemWrapper key={uniqueKey} onClick={() => activeHandler(uniqueKey)}>
              {clonedChild}
              {index === 0 && <SwitchActiveIndicator $itemNumber={Number(currentActive)} $type={indicatorType ?? 'underline'} />}
            </ItemWrapper>
          );
        }
        return child; 
      })}
    </StyledList>
  );
}
