import { IFancyBoxProps } from './FancyBox.model';
import { StyledFancyBox } from './FancyBox.style';

// --------------------------------------------------------------------------- //
// ------------  A Bar that can usesd for for the most components ------------ //
// --------------------------------------------------------------------------- //
export default function FancyBox(props: IFancyBoxProps) {
  const { layer, themeType, outlined, outlinedBackgroundStrength, externalStyle, ...htmlProps } = props;

  return (
    <StyledFancyBox
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
