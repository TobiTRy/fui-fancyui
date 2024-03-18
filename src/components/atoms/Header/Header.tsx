import { THeaderWithHTMLAttributes } from '@/components/atoms/Header/THeader.model';
import { StyledHeader } from './Header.style';

// --------------------------------------------------------------------------- //
// -------------- A Simple header that can complettly customized ------------- //
// --------------------------------------------------------------------------- //
export default function Header(props: THeaderWithHTMLAttributes) {
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
