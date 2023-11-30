import React, { useState } from 'react';

import { Button, MenueItemWrapper, Ring, SpeedDialContainer, Wrapper } from './SpeedDailButton.style';
import SpeedDailMenueItem, { TMenueItemProps, TMenueButtonProps } from '../../atoms/SpeedDialMenueItem/SpeedDailMenueItem';
import SVGPlus from '../../icons/SVGPlus/SVGPlus';

export type ISpeedail = {
  items?: TMenueButtonProps[];
} & TMenueItemProps;

// --------------------------------------------------------------------------- //
// ---------- Component that handles the Buttonlist and the opening ---------- //
// --------------------------------------------------------------------------- //
export default function FancySpeedDialButton(props: ISpeedail) {
  const { items, labelAlign, hideLabel } = { ...defaultProps, ...props };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <SpeedDialContainer>
        <MenueItemWrapper>
          {items?.map((item, index) => (
            <SpeedDailMenueItem
              key={index}
              index={index}
              isOpen={isOpen}
              label={item.label}
              icon={item.icon}
              hideLabel={hideLabel}
              labelAlign={labelAlign}
            />
          ))}
        </MenueItemWrapper>
        <Button $isOpen={isOpen} aria-label={'Open Menue'} onClick={() => setIsOpen(!isOpen)}>
          {SVGPlus}
        </Button>
        <Ring $isOpen={isOpen} />
      </SpeedDialContainer>
    </Wrapper>
  );
}

const defaultProps: ISpeedail = {
  labelAlign: 'right',
};
