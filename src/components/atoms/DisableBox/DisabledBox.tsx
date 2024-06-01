import { StyledDisabledBox } from './DisabledBox.style';
import { TDisabledBox } from './TDisabled.model';

export default function DisabledBox(props: TDisabledBox) {
  const { disabled, pointerEvents, children } = props;

  return (
    <StyledDisabledBox $disabled={disabled} $pointerEvents={pointerEvents}>
      {children}
    </StyledDisabledBox>
  );
}
