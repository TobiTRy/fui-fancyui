import React, { useState } from 'react';

import { Button, Label, MenueItemContainer, MenueItemWrapper, MenuItem, Ring, SpeedDialContainer, Wrapper } from './SpeedDailButton.style';
import SVGPlus from '../../SVGIcons/SVGPlus';
import Typography from '../../Atoms/Typography/Typography';

export interface ISpeedail {
  items?: Array<{ label?: string; value: string | number | JSX.Element }>;
  labelAlign?: 'left' | 'right';
}
export default function FancySpeedDialButton(props: ISpeedail) {
  const { items, labelAlign } = { ...defaultProps, ...props };
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
              <MenuItem>{item.value}</MenuItem>
              {item.label && (
                <Typography type="inlineElement" variant="label" $labelAlign={labelAlign} $isOpen={isOpen} style={Label}>
                  {item.label}
                </Typography>
              )}
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
