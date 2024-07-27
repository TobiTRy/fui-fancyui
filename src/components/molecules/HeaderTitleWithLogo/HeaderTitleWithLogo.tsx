'use client';

import { Typography } from '@/components/atoms/Typography';

import { LogoWrapper, StyledHeading } from './HeaderTitleWithLogo.style';
import { THeaderTitleWithLogoWithHTMLAttributes } from './THeaderTitleWithLogo.model';

// --------------------------------------------------------------------------- //
// -------- A Header Template for the Logo and the Title of a header --------- //
// --------------------------------------------------------------------------- //
export default function HeaderTitleWithLogo(props: THeaderTitleWithLogoWithHTMLAttributes) {
  const { title, logo, themeType = 'secondary', layer = 0, ...htmlProps } = props;

  return (
    <StyledHeading $themeType={themeType} $layer={layer} {...htmlProps}>
      {logo && <LogoWrapper>{logo}</LogoWrapper>}
      {title && (
        <Typography variant="interactiveLg" fontWeight="bold">
          {title}
        </Typography>
      )}
    </StyledHeading>
  );
}
