import React from 'react';

import { RawNav } from '@/components/atoms/RawNav';
import { FlexBoxTemplateNav } from '@/components/molecules/FancyNavBar/utils/FlexBoxTemplateNav';
import { SwitchIndicatorList } from './utils/SwitchIndicatorList';

type TFancyNavBar = {
  children?: React.ReactNode;
};

export default function FancyNavBar(props: TFancyNavBar) {
  const { children } = props;

  return <RawNav $externalStyle={{ height: 'auto' }}>{children}</RawNav>;
}

FancyNavBar.SwitchIndicatorList = SwitchIndicatorList;
FancyNavBar.Ul = FlexBoxTemplateNav;
