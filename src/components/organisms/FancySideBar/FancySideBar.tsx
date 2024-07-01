import { SideBar, TSideBarWithAllAttrs } from '@/components/molecules/SideBar';
import { Item, ItemWrapper, SlotBottom, SlotTop } from './FancySideBar.style';
import { Children, ReactNode } from 'react';
import { SwitchActiveIndicator } from '@/components/atoms/SwitchActiveIndicator';
import { TTextAlignLR } from '@/types/TTextAlignLR';

type TFancySideBar = {
  slotTop?: ReactNode;
  slotBottom?: ReactNode;
  slotContent: ReactNode[];
  align?: TTextAlignLR;
} & Omit<TSideBarWithAllAttrs, 'children'>;

export default function FancySideBar(props: TFancySideBar) {
  const { slotContent, slotBottom, slotTop, align = 'left', ...sideBarProps } = props;

  return (
    <SideBar {...sideBarProps}>
      {slotTop && <SlotTop>{slotTop}</SlotTop>}

      {Children.map(slotContent, (child, index) => {
        return (
          <ItemWrapper key={index}>
            <Item>{child}</Item>
            {index === 0 && (
              <SwitchActiveIndicator
                itemNumber={1}
                type={align === 'right' ? 'rightline' : 'leftline'}
                direction={'vertical'}
                tabSpacing="xs"
              />
            )}
          </ItemWrapper>
        );
      })}

      {slotBottom && <SlotBottom>{slotBottom}</SlotBottom>}
    </SideBar>
  );
}
