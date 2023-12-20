import { ReactNode } from 'react';

import { Typography } from '@/components/atoms/Typography';

import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TThemeTypes';

import { LogoWrapper, StyledHeading, Wrapper } from './HeaderTitleWithLogo.style';

interface IHeaderTitleWithLogo {
  title?: ReactNode | string;
  logo?: ReactNode;
  href?: string;
  themeType?: TThemeTypes;
  layer?: TLayer;
}
// --------------------------------------------------------------------------- //
// -------- A Header Template for the Logo and the Title of a header --------- //
// --------------------------------------------------------------------------- //
export default function HeaderTitleWithLogo(props: IHeaderTitleWithLogo) {
  const { title, logo, href, themeType, layer } = props;

  return (
    <Wrapper>
      <StyledHeading href={href} $themeType={themeType} $layer={layer}>
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
