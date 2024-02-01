import { ISVGAtomProps } from './FancySVGAtom.model';
import { StyledSVG } from './FancySVGAtom.style';

// --------------------------------------------------------------------------- //
// --------- This is a wrapper for SVGs to wrap them and style them ---------- //
// --------------------------------------------------------------------------- //
export default function FancySVGAtom(props: ISVGAtomProps) {
  const { children, isPassive, sizeC, isActive, errorMessage, externalStyle, themeType, layer, ...htmlProps } = {
    ...defaultProps,
    ...props,
  };

  return (
    <StyledSVG
      $sizeC={sizeC}
      $isPassive={isPassive}
      $isActive={isActive}
      $errorMessage={errorMessage}
      $externalStyle={externalStyle}
      $themeType={themeType}
      $layer={layer}
      {...htmlProps}
    >
      {children}
    </StyledSVG>
  );
}

const defaultProps: ISVGAtomProps = {
  sizeC: 'xxs',
  isPassive: false,
  isActive: false,
};
