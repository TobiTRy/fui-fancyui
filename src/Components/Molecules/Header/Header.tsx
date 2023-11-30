import React from 'react';
import { CSSProp } from 'styled-components';

import { IgenerateThemeForCard } from '../../../design/designFunctions/generateThemeForCard/generateThemeForCard';
import { StyledHeader } from './Header.style';

type THeaderProps = IgenerateThemeForCard & {
  children?: React.ReactNode;
  externalStyle?: CSSProp;
} & React.HTMLAttributes<HTMLHeadingElement>;

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
