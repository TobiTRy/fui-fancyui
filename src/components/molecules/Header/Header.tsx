import React from 'react';
import { CSSProp } from 'styled-components';

import { StyledHeader } from './Header.style';
import { IGenerateThemeForCardProps } from '@/design/designFunctions/generateThemeForCard';

type THeaderProps = IGenerateThemeForCardProps & {
  children?: React.ReactNode;
  externalStyle?: CSSProp;
} & React.HTMLAttributes<HTMLHeadingElement>;
// --------------------------------------------------------------------------- //
// -------------- A Simple header that can complettly customized ------------- //
// --------------------------------------------------------------------------- //
export default function Header(props: THeaderProps) {
  const { themeType, layer, outlined, outlinedBackgroundStrength, children, externalStyle } = props;
  return (
    <StyledHeader
      $themeType={themeType}
      $layer={layer}
      $outlined={outlined}
      $outlinedBackgroundStrength={outlinedBackgroundStrength}
      $externalStyle={externalStyle}
    >
      {children}
    </StyledHeader>
  );
}
