import { ReactNode } from 'react';

import { Typography } from '@/components/atoms/Typography';

import { TLayer } from '@/types/TLayer';

import { LogoWrapper, StyledHeading, Wrapper } from './HeaderTitleWithLogo.style';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

interface IHeaderTitleWithLogo {
  title?: ReactNode | string;
  logo?: ReactNode;
  href?: string;
  themeType?: TUiColorsNotTransparent;
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
          <Typography variant="interactiveLg" fontWeight="bold">
            {title}
          </Typography>
        )}
      </StyledHeading>
    </Wrapper>
  );
}
