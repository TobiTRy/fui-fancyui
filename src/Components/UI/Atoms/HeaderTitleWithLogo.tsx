import React from 'react'
import styled from 'styled-components';
import { spacingPx } from '../Design/design';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const StyledHeading = styled.h1`
  display: flex;
  gap: ${spacingPx.sm};
  align-items: center;
`

interface IHeaderTitleWithLogo{
  title?: React.ReactNode | string;
  logo?: React.ReactNode;
}
export default function HeaderTitleWithLogo(props: IHeaderTitleWithLogo) {
  const { title, logo } = {...defaultProps, ...props};

  return (
    <Wrapper>
      <StyledHeading>
        {logo && <LogoWrapper>{logo}</LogoWrapper>}
        {title && <span>{title}</span>}
      </StyledHeading>
    </Wrapper>
  )
}

const defaultProps: IHeaderTitleWithLogo = {
  title: 'LetsFollowMe',
  logo: 'Logo'
}
