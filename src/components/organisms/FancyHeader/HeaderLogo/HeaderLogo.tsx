import React from 'react';
import { styled } from 'styled-components';

import LogoImage from '@/components/organisms/FancyHeader/HeaderLogo/LogoImage/LogoImage';
import LogoIcon from '@/components/organisms/FancyHeader/HeaderLogo/LogoIcon/LogoIcon';
import LogoTitle from '@/components/organisms/FancyHeader/HeaderLogo/LogoTitle/LogoTitle';

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

interface IHeaderLogo {
  children?: React.ReactNode;
}
export default function HeaderLogo({ children }: IHeaderLogo) {
  return <StyledLogoWrapper>{children}</StyledLogoWrapper>;
}

HeaderLogo.Image = LogoImage;
HeaderLogo.Icon = LogoIcon;
HeaderLogo.Title = LogoTitle;
