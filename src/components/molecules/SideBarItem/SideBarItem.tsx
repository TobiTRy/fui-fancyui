import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { StyledSideBarItem, Wrapper } from './SideBarItem.style';

import { Icon } from './SubComponents/Icon';
import { Label } from './SubComponents/Label';
import { TSideBarItem } from './TSideBarItem.model';

import { sizeSettings } from './sizeSettings';

function SideBarItem(props: TSideBarItem) {
  const { children, sizeC = 'sm', ...FancyBoxProps } = props;

  return (
    <Wrapper $sizeC={sizeC}>
      <StyledSideBarItem sizeC={sizeSettings[sizeC].boxSize} {...FancyBoxProps}>
        <FancyFlexBox align="center" gap={'sm'}>
          {children}
        </FancyFlexBox>
      </StyledSideBarItem>
    </Wrapper>
  );
}

SideBarItem.Icon = Icon;
SideBarItem.Label = Label;

export default SideBarItem;
