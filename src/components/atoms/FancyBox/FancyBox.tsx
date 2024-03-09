import { ElementType } from 'react';
import { TFancyBoxProps } from './FancyBox.model';
import { StyledFancyBox } from './FancyBox.style';
import { sizeSettings } from './sizeSettings';

// --------------------------------------------------------------------------- //
// ------------  A Bar that can usesd for for the most components ------------ //
// --------------------------------------------------------------------------- //
export default function FancyBox<T extends ElementType = 'div'>(props: TFancyBoxProps<T>) {
  const {
    sizeC,
    layer,
    themeType,
    outlined,
    outlinedBackgroundStrength,
    externalStyle,
    as,
    borderRadius,
    ...htmlProps
  } = props;

  const calcBorderRadius = borderRadius ? borderRadius : sizeC ? sizeSettings[sizeC].borderRadius : undefined;
  const calcPadding = sizeC ? sizeSettings[sizeC].padding : undefined;

  return (
    <StyledFancyBox
      sizeC={sizeC}
      $layer={layer}
      as={as || 'div'}
      $outlined={outlined}
      $padding={calcPadding}
      $themeType={themeType}
      $borderRadius={calcBorderRadius}
      $externalStyle={externalStyle}
      $outlinedBackgroundStrength={outlinedBackgroundStrength}
      {...htmlProps}
    >
      {props.children}
    </StyledFancyBox>
  );
}
