import { ElementType } from 'react';
import { TFancyBoxWithHTMLAttrs } from './FancyBox.model';
import { StyledFancyBox } from './FancyBox.style';
import { sizeSettings } from './sizeSettings';

// --------------------------------------------------------------------------- //
// ------------  A Bar that can usesd for for the most components ------------ //
// --------------------------------------------------------------------------- //
export default function FancyBox<T extends ElementType = 'div'>(props: TFancyBoxWithHTMLAttrs<T>) {
  const {
    as,
    sizeC,
    layer = 1,
    themeType,
    outlined,
    outlinedRemoveBorder,
    outlinedBackgroundStrength,
    externalStyle,
    borderRadius,
    padding,
    margin,
    hoverLayer,
    ...htmlProps
  } = props;

  const calcBorderRadius = borderRadius ? borderRadius : sizeC ? sizeSettings[sizeC].borderRadius : undefined;
  const calcPadding = padding ? padding : sizeC ? sizeSettings[sizeC].padding : undefined;

  return (
    <StyledFancyBox
      $sizeC={sizeC}
      $layer={layer}
      as={as || 'div'}
      $outlined={outlined}
      $padding={calcPadding}
      $themeType={themeType}
      $margin={margin}
      $outlinedRemoveBorder={outlinedRemoveBorder}
      $borderRadius={calcBorderRadius}
      $externalStyle={externalStyle}
      $outlinedBackgroundStrength={outlinedBackgroundStrength}
      $hoverLayer={hoverLayer}
      {...htmlProps}
    >
      {props.children}
    </StyledFancyBox>
  );
}
