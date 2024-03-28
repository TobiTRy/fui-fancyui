import React from 'react';

import { Header } from '@/components/atoms/Header';
import { FancyNavBar } from '@/components/molecules/FancyNavBar';
import HeaderLogo from '@/components/atoms/Header/HeaderLogo/HeaderLogo';

type IFancyHeader = {
  children?: React.ReactNode;
} & React.ComponentProps<typeof Header>;
function FancyHeader(props: IFancyHeader) {
  return <Header {...props} />;
}

FancyHeader.Nav = FancyNavBar;
FancyHeader.Logo = HeaderLogo;

export default FancyHeader;
