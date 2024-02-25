import ComponentAsWrapper from '@/components/shared/ComponentAsWrapper/ComponentAsWrapper';
import { StyledAnchor, StyledButton } from './FancyActionWrapper.style';
import { TFancyActionWrapper } from '@/components/atoms/FancyActionWrapper/TFancyActionWrapper.model';

// --------------------------------------------------------------------------- //
// ---- FancyActionWrapper that wrapps the cildren in a "a" tag or button ---- //
// --------------------------------------------------------------------------- //
export default function FancyActionWrapper(props: TFancyActionWrapper) {
  const { children, WrapperComponent, ...HTMLProps } = props;

  const Wrapper = WrapperComponent ? (
    WrapperComponent
  ) : HTMLProps.as === 'a' ? (
    <StyledAnchor {...HTMLProps}></StyledAnchor>
  ) : (
    <StyledButton {...HTMLProps}></StyledButton>
  );

  return <ComponentAsWrapper wrapper={Wrapper} children={children} />;
}
