import React from 'react';
import { styled } from 'styled-components';

import Typography from '../../../Atoms/Typography/Typography';
import { TThemeTypes } from '@/Components/Interface/TUiColors';
import { TLayer } from '@/Components/Interface/TLayer';
import { getTextColor } from '../../../Design/color/colorCalculatorForComponet';
import { TTheme } from '@/Components/Interface/TTheme';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledHeading = styled.a<{ theme: TTheme; $themeType?: TThemeTypes; $layer?: TLayer }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  word-break: keep-all;
  text-decoration: none;
  color: ${({ theme, $themeType = 'secondary', $layer }) => getTextColor({ theme, $themeType, $textLayer: $layer })};
`;

interface IHeaderTitleWithLogo {
  title?: React.ReactNode | string;
  logo?: React.ReactNode;
  linkTo?: string;
  themeType?: TThemeTypes;
  layer?: TLayer;
}
export default function HeaderTitleWithLogo(props: IHeaderTitleWithLogo) {
  const { title, logo, linkTo, themeType, layer } = { ...defaultProps, ...props };

  return (
    <Wrapper>
      <StyledHeading href={linkTo} $themeType={themeType} $layer={layer}>
        {logo && <LogoWrapper>{logo}</LogoWrapper>}
        {title && (
          <Typography type="inlineElement" variant="h3" weight="bold">
            {title}
          </Typography>
        )}
      </StyledHeading>
    </Wrapper>
  );
}

const defaultProps: IHeaderTitleWithLogo = {
  title: '',
  linkTo: '/',
};
