import React from 'react';
import { CSSProp, css } from 'styled-components';

import { RawNav } from '@/components/atoms/RawNav';
import { FlexBoxTemplateNav } from '@/components/molecules/FancyNavBar/utils/FlexBoxTemplateNav';
import { SwitchIndicatorList } from './utils/SwitchIndicatorList';

type TFancyNavBar = {
  children?: React.ReactNode;
  externalStyle?: CSSProp;
};

export default function FancyNavBar(props: TFancyNavBar) {
  const { children, externalStyle } = props;

  return (
    <RawNav
      $externalStyle={css`
        height: auto;
        display: flex;
        align-items: center;
        ${externalStyle}
      `}
    >
      {children}
    </RawNav>
  );
}

FancyNavBar.SwitchIndicatorList = SwitchIndicatorList;
FancyNavBar.Ul = FlexBoxTemplateNav;
