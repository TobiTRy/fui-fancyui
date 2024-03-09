import { useState } from 'react';

import { SVGPlus } from '@/components/icons/SVGPlus';
import {
  Button,
  MenueItemContainer,
  MenueItemWrapper,
  Ring,
  SpeedDialContainer,
  Wrapper,
} from './SpeedDailButton.style';
import { ActionItem } from '@/components/molecules/ActionItem';
import { TActionItemButton, TActionItemSetting } from '@/components/molecules/ActionItem/TActionItem.model';

export type ISpeedail = {
  items?: TActionItemButton[];
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
} & Omit<TActionItemSetting, 'labelAlign'> & { labelAlign?: 'left' | 'right' };

// --------------------------------------------------------------------------- //
// ---------- Component that handles the Buttonlist and the opening ---------- //
// --------------------------------------------------------------------------- //
export default function FancySpeedDialButton(props: ISpeedail) {
  const { items, labelAlign, buttonProps, themeType = 'primary' } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <SpeedDialContainer>
        <MenueItemWrapper $textAlign={labelAlign}>
          {items?.map((item, index) => (
            <MenueItemContainer key={index} $index={index} $actionItemSize={'md'} $isOpen={isOpen}>
              <ActionItem icon={item.icon} label={item.label} themeType={themeType} size="md" labelAlign={labelAlign} />
            </MenueItemContainer>
          ))}
        </MenueItemWrapper>

        <Button
          $isOpen={isOpen}
          onClick={(e) => {
            buttonProps?.onClick?.(e);
            setIsOpen(!isOpen);
          }}
          {...buttonProps}
        >
          <SVGPlus />
        </Button>
        <Ring $isOpen={isOpen} />
      </SpeedDialContainer>
    </Wrapper>
  );
}
