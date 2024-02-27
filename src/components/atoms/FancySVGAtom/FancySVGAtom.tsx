import { TSVGAtomProps } from './TFancySVGAtom.model';
import { StyledSVG } from './FancySVGAtom.style';

// --------------------------------------------------------------------------- //
// --------- This is a wrapper for SVGs to wrap them and style them ---------- //
// --------------------------------------------------------------------------- //
export default function FancySVGAtom(props: TSVGAtomProps) {
  const {
    children,
    isPassive = false,
    sizeC = 'xxs',
    isActive = false,
    systemMessage,
    externalStyle,
    themeType,
    layer,
    ...htmlProps
  } = props;

  return (
    <StyledSVG
      $sizeC={sizeC}
      $isPassive={isPassive}
      $isActive={isActive}
      $systemMessage={systemMessage}
      $externalStyle={externalStyle}
      $themeType={themeType}
      $layer={layer}
      {...htmlProps}
    >
      {children}
    </StyledSVG>
  );
}
