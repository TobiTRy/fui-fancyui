import React, { useState } from 'react';

import { Button, Label, MenueItemContainer, MenueItemWrapper, MenuItem, Ring, SpeedDialContainer, Wrapper } from './SpeedDailButton.style';
import { ISpeedail } from './IFancySpeedDialButton';
import SVGPlus from '../../SVGIcons/SVGPlus';

export default function FancySpeedDialButton({ items }: ISpeedail) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <SpeedDialContainer>
        <Button $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {SVGPlus}
        </Button>
        <Ring $isOpen={isOpen} />
        <MenueItemWrapper>
          {items?.map((item, index) => (
            <MenueItemContainer key={index} $index={index} $isOpen={isOpen}>
              <Label $isOpen={isOpen}>{item.label}</Label>
              <MenuItem>{item.value}</MenuItem>
            </MenueItemContainer>
          ))}
        </MenueItemWrapper>
      </SpeedDialContainer>
    </Wrapper>
  );
}
