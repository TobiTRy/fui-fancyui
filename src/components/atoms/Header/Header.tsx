import { THeaderWithHTMLAttributes } from '@/components/atoms/Header/THeader.model';
import { StyledHeader } from './Header.style';
import { FancyNavBar } from '@/components/molecules/FancyNavBar';
import HeaderLogo from './HeaderLogo/HeaderLogo';

// --------------------------------------------------------------------------- //
// -------------- A Simple header that can complettly customized ------------- //
// --------------------------------------------------------------------------- //
function Header(props: THeaderWithHTMLAttributes) {
  const { themeType = 'primary', layer = 1, outlined, outlinedBackgroundStrength, children, externalStyle } = props;

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

Header.Nav = FancyNavBar;
Header.Logo = HeaderLogo;

export default Header;
