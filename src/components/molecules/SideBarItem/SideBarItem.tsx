import { TFancyBoxWithHTMLAttrs } from '@/components/atoms/FancyBox/FancyBox.model';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { Typography } from '@/components/atoms/Typography';
import { StyledSideBarItem } from './SideBarItem.style';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';

import { ReactNode } from 'react';

type TSideBarItem = {
  icon: ReactNode;
  label: string;
} & TFancyBoxWithHTMLAttrs;

export default function SideBarItem(props: TSideBarItem) {
  const { icon, label, ...FancyBoxProps } = props;

  return (
    <StyledSideBarItem padding={'xxs'} borderRadius={'xs'} {...FancyBoxProps}>
      <FancyFlexBox align="center" gap={'sm'}>
        <FancySVGAtom sizeC="sm" externalStyle={{ flexShrink: 0 }}>
          {icon}
        </FancySVGAtom>
        <Typography variant="bodytextMd" externalStyle={{ overflow: 'hidden', flex: '1', whiteSpace: 'nowrap' }}>
          {label}
        </Typography>
      </FancyFlexBox>
    </StyledSideBarItem>
  );
}
