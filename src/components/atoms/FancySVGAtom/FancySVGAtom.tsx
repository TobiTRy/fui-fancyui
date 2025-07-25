'use client';

import { TFancySVGAtomWithNativeAttrs } from './TFancySVGAtom.model';
import { StyledSVG } from './FancySVGAtom.style';

// --------------------------------------------------------------------------- //
// --------- This is a wrapper for SVGs to wrap them and style them ---------- //
// --------------------------------------------------------------------------- //
export default function FancySVGAtom(props: TFancySVGAtomWithNativeAttrs) {
  const {
    children,
    isPassive = false,
    sizeC = 'xxs',
    isActive = false,
    systemMessage,
    externalStyle,
    themeType,
    layer,
    hoverLayer,
    hoverThemeType,
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
      $hoverLayer={hoverLayer ?? undefined}
      $hoverThemeType={hoverThemeType ?? undefined}
      {...htmlProps}
    >
      {children}
    </StyledSVG>
  );
}
