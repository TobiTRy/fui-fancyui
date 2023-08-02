import React, { useState } from 'react';

import { Button, Label, MenueItemContainer, MenueItemWrapper, MenuItem, Ring, SpeedDialContainer, Wrapper } from './SpeedDailButton.style';
import SVGPlus from '../../SVGIcons/SVGPlus';
import Typography from '../../Atoms/Typography/Typography';

export interface ISpeedail {
  items?: Array<{ label?: string; value: string | number | JSX.Element }>;
  labelAlign?: 'left' | 'right';
  hideLabel?: boolean;
}
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
              <MenuItem aria-label={item.label} >{item.value}</MenuItem>
              {(item.label && !hideLabel) && (
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
