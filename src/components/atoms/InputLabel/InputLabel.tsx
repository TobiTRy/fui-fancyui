import { TInputLabelWithNAtiveAttrs } from './TInputLabel.model';
import { StyledInputLabel } from './InputLabel.style';

export default function InputLabel(props: TInputLabelWithNAtiveAttrs) {
  const { children, isActive, systemMessageType, themeType, layer, align, lableVariant, externalStyle } = props;

  return (
    <StyledInputLabel
      $isActive={isActive}
      $systemMessageType={systemMessageType}
      $themeType={themeType}
      $layer={layer}
      $align={align}
      $lableVariant={lableVariant}
      $externalStyle={externalStyle}
    >
      {children}
    </StyledInputLabel>
  );
}
