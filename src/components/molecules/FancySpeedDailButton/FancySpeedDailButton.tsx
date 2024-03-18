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
import { TFancySpeedDailButton } from './TFancySpeedDailButton.model';

// --------------------------------------------------------------------------- //
// ---------- Component that handles the Buttonlist and the opening ---------- //
// --------------------------------------------------------------------------- //
export default function FancySpeedDialButton(props: TFancySpeedDailButton) {
  const { items, labelAlign, themeType = 'primary', ...actionItemProps } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <SpeedDialContainer>
        <MenueItemWrapper $textAlign={labelAlign}>
          {items?.map((item, index) => (
            <MenueItemContainer key={index} $index={index} $actionItemSize={'md'} $isOpen={isOpen}>
              <ActionItem
                icon={item.icon}
                label={item.label}
                themeType={themeType}
                labelAlign={labelAlign}
                {...actionItemProps}
              />
            </MenueItemContainer>
          ))}
        </MenueItemWrapper>
        <Button
          $isOpen={isOpen}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <SVGPlus />
        </Button>
        <Ring $isOpen={isOpen} />
      </SpeedDialContainer>
    </Wrapper>
  );
}
