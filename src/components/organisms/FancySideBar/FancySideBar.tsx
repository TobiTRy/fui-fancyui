import { Children, useEffect, useState } from 'react';

import { SwitchActiveIndicator } from '@/components/atoms/SwitchActiveIndicator';
import { SideBar } from '@/components/molecules/SideBar';
import { TFancySideBar } from '@/components/organisms/FancySideBar/TFancySideBar.model';

import { ChildWrapper, ItemWrapper, MainItemsWrapper, SlotBottom, SlotTop } from './FancySideBar.style';
import { sizeSettings } from '@/components/molecules/SideBar/sizeSettings';

export default function FancySideBar(props: TFancySideBar) {
  const { slotContent, slotBottom, sizeC = 'sm', slotTop, align = 'left', wichItemIsActive, ...sideBarProps } = props;
  const [activeItem, setActiveItem] = useState(wichItemIsActive ?? 0);

  useEffect(() => {
    setActiveItem(wichItemIsActive ?? 0);
  }, [wichItemIsActive]);

  return (
    <SideBar sizeC={sizeC} {...sideBarProps}>
      {/* Items wich can position above the Action Items */}
      {slotTop && <SlotTop $sizeC={sizeC}>{slotTop}</SlotTop>}

      {/* The action Items with a active indicator */}
      <MainItemsWrapper $gap={sizeSettings[sizeC].gapBetweenItems}>
        {Children.map(slotContent, (child, index) => {
          return (
            <ItemWrapper key={index} onClick={() => setActiveItem(index)}>
              <ChildWrapper $sizeC={sizeC}>{child}</ChildWrapper>
              {index === 0 && (
                <SwitchActiveIndicator
                  itemNumber={activeItem}
                  type={align === 'right' ? 'rightline' : 'leftline'}
                  direction={'vertical'}
                  tabSpacing={sizeSettings[sizeC].gapBetweenItems}
                />
              )}
            </ItemWrapper>
          );
        })}
      </MainItemsWrapper>

      {/* Items wich can position below the Action Items */}
      {slotBottom && <SlotBottom $sizeC={sizeC}>{slotBottom}</SlotBottom>}
    </SideBar>
  );
}
