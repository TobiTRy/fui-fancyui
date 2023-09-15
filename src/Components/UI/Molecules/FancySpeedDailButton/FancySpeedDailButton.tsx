import React, { useState } from 'react';

import { Button, MenueItemContainer, MenueItemWrapper, Ring, SpeedDialContainer, Wrapper } from './SpeedDailButton.style';
import SpeedDailMenueItem, { TMenueItemProps, TMenueButtonProps } from '../../Atoms/SpeedDialMenueItem/SpeedDailMenueItem';
import SVGPlus from '../../SVGIcons/SVGPlus';

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
        <Button $isOpen={isOpen} aria-label={'Open Menue'} onClick={() => setIsOpen(!isOpen)}>
          {SVGPlus}
        </Button>
        <Ring $isOpen={isOpen} />
        <MenueItemWrapper>
          {items?.map((item, index) => (
            <MenueItemContainer key={index} $index={index} $isOpen={isOpen}>
              <SpeedDailMenueItem label={item.label} value={item.value} hideLabel={hideLabel} isOpen={isOpen} labelAlign={labelAlign} />
            </MenueItemContainer>
          ))}
        </MenueItemWrapper>
      </SpeedDialContainer>
    </Wrapper>
  );
}

const defaultProps: ISpeedail = {
  labelAlign: 'right',
};
