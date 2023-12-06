import React from 'react';

import { Header } from '@/components/molecules/Header';
import { FancyNavBar } from '@/components/molecules/FancyNavBar';

type IFancyHeader = {
  children?: React.ReactNode;
} & React.ComponentProps<typeof Header>;
function FancyHeader(props: IFancyHeader) {
  return <Header {...props} />;
}

FancyHeader.Nav = FancyNavBar;

export default FancyHeader;
