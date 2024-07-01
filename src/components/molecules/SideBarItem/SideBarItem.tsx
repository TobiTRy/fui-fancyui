import { FancyBox } from '@/components/atoms/FancyBox';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { Typography } from '@/components/atoms/Typography';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import React from 'react';

export default function SideBarItem() {
  return (
    <FancyBox layer={3} hoverLayer={6} className={'style.wrapper'}>
      <FancyFlexBox align="center" gap={'sm'}>
        <FancySVGAtom sizeC="sm" externalStyle={{ flexShrink: 0 }}>
          {'icon'}
        </FancySVGAtom>
        <Typography variant="bodytextMd" externalStyle={{ overflow: 'hidden', flex: '1', whiteSpace: 'nowrap' }}>
          {'label'}
        </Typography>
      </FancyFlexBox>
    </FancyBox>
  );
}
