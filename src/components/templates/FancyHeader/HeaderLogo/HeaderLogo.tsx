import React from 'react';
import { styled } from 'styled-components';

import LogoImage from '@/components/organisms/FancyHeader/HeaderLogo/LogoImage/LogoImage';
import LogoIcon from '@/components/organisms/FancyHeader/HeaderLogo/LogoIcon/LogoIcon';
import LogoTitle from '@/components/organisms/FancyHeader/HeaderLogo/LogoTitle/LogoTitle';

type THeaderLogo = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
export default function HeaderLogo(props: THeaderLogo) {
  return <StyledLogoWrapper {...props} />;
}

HeaderLogo.Image = LogoImage;
HeaderLogo.Icon = LogoIcon;
HeaderLogo.Title = LogoTitle;

const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-shrink: 0;
  padding: 8px;
  box-sizing: border-box;
  gap: 8px;
`;
