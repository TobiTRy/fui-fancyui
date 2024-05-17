import { StyledDisabledBox } from './DisabledBox.style';

export type TDisabledStyleBox = {
  disabled?: boolean;
  pointerEvents?: 'none' | 'auto';
  children?: React.ReactNode;
};

export default function DisabledStyleBox(props: TDisabledStyleBox) {
  const { disabled, pointerEvents, children } = props;

  return (
    <StyledDisabledBox $disabled={disabled} $pointerEvents={pointerEvents}>
      {children}
    </StyledDisabledBox>
  );
}
