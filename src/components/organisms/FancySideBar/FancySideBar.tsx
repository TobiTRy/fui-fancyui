import { SideBar, TSideBarWithAllAttrs } from '@/components/molecules/SideBar';
import { Item, ItemWrapper, SlotBottom, SlotTop } from './FancySideBar.style';
import { Children, ReactNode, useEffect, useState } from 'react';
import { SwitchActiveIndicator } from '@/components/atoms/SwitchActiveIndicator';
import { TTextAlignLR } from '@/types/TTextAlignLR';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';

type TFancySideBar = {
  slotTop?: ReactNode;
  slotBottom?: ReactNode;
  slotContent: ReactNode[];
  align?: TTextAlignLR;
  wichItemIsActive?: number;
} & Omit<TSideBarWithAllAttrs, 'children'>;

export default function FancySideBar(props: TFancySideBar) {
  const { slotContent, slotBottom, slotTop, align = 'left', wichItemIsActive, ...sideBarProps } = props;
  const [activeItem, setActiveItem] = useState(wichItemIsActive ?? 0);

  useEffect(() => {
    setActiveItem(wichItemIsActive ?? 0);
  }, [wichItemIsActive]);

  return (
    <SideBar {...sideBarProps}>
      {slotTop && <SlotTop>{slotTop}</SlotTop>}

      <FancyFlexBox direction="column" gap={'sm'} align="stretch">
        {Children.map(slotContent, (child, index) => {
          return (
            <ItemWrapper key={index} onClick={() => setActiveItem(index)}>
              <Item>{child}</Item>
              {index === 0 && (
                <SwitchActiveIndicator
                  itemNumber={activeItem}
                  type={align === 'right' ? 'rightline' : 'leftline'}
                  direction={'vertical'}
                  tabSpacing={'sm'}
                />
              )}
            </ItemWrapper>
          );
        })}
      </FancyFlexBox>

      {slotBottom && <SlotBottom>{slotBottom}</SlotBottom>}
    </SideBar>
  );
}
