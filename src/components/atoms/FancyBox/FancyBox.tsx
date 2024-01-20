import { ElementType } from 'react';
import { TFancyBoxProps } from './FancyBox.model';
import { StyledFancyBox } from './FancyBox.style';

// --------------------------------------------------------------------------- //
// ------------  A Bar that can usesd for for the most components ------------ //
// --------------------------------------------------------------------------- //
export default function FancyBox<T extends ElementType = 'div'>(props: TFancyBoxProps<T>) {
  const { layer, themeType, outlined, outlinedBackgroundStrength, externalStyle, as, ...htmlProps } = props;

  return (
    <StyledFancyBox
      as={as || 'div'}
      $layer={layer}
      $outlined={outlined}
      $themeType={themeType}
      $externalStyle={externalStyle}
      $outlinedBackgroundStrength={outlinedBackgroundStrength}
      {...htmlProps}
    >
      {props.children}
    </StyledFancyBox>
  );
}
