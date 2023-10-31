import React, { useEffect, useState } from 'react';
import { CSSProp } from 'styled-components';

import SwitchActiveIndicator, { IActiveSwitchIndicator } from '../../Atoms/SwitchActiveIndicator/SwitchActiveIndicator';
import { ItemWrapper, StyledList } from './SwitchList.style';


type TSwitchActiveIndicator = Omit<IActiveSwitchIndicator, '$itemNumber'>;

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
export default function SwitchList(props: IBottomBarListProps & TSwitchActiveIndicator) {
  const { children, whichIndexIsSelected, handler, indicatorType, externalStyle, $direction, ...indicatorProps  } = props;
  const [currentActive, setCurrentActive] = useState('');

  const activeHandler = (uniqueKey: string) => {
    setCurrentActive(uniqueKey);
    handler && handler(Number(uniqueKey));
  };

  useEffect(() => {
    setCurrentActive(`${whichIndexIsSelected ? whichIndexIsSelected + 1 : 1}`);
  }, [whichIndexIsSelected]);

  return (
    <StyledList $externalStyle={externalStyle} $direction={$direction}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          // Generate a unique key (or use any other unique identifier logic)
          const uniqueKey = `${index + 1}`;

          // Clone the child and add the uniqueKey prop
          const clonedChild = React.cloneElement(child as React.ReactElement<IKey>, { 'uniquekey': uniqueKey });

          return (
            <ItemWrapper key={uniqueKey} onClick={() => activeHandler(uniqueKey)}>
              {clonedChild}
              {index === 0 && <SwitchActiveIndicator $direction={$direction} $itemNumber={Number(currentActive)} $type={indicatorType ?? 'underline'} {...indicatorProps} />}
            </ItemWrapper>
          );
        }
        return child; 
      })}
    </StyledList>
  );
}
