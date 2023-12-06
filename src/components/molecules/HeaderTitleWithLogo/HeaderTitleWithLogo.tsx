import { ReactNode } from 'react';

import { Typography } from '@/components/atoms/Typography';

import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TThemeTypes';

import { LogoWrapper, StyledHeading, Wrapper } from './HeaderTitleWithLogo.style';

interface IHeaderTitleWithLogo {
  title?: ReactNode | string;
  logo?: ReactNode;
  linkTo?: string;
  themeType?: TThemeTypes;
  layer?: TLayer;
}
// --------------------------------------------------------------------------- //
// -------- A Header Template for the Logo and the Title of a header --------- //
// --------------------------------------------------------------------------- //
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
