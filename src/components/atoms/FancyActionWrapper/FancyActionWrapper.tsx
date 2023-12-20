import React from 'react';

import ComponentAsWrapper from '@/components/shared/ComponentAsWrapper/ComponentAsWrapper';
import { StyledAnchor, StyledButton } from './FancyActionWrapper.style';

// Define types for button and anchor attributes
type TNativeButtonProps = React.HTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type TNativeAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

// Define a type that allows either specific button or anchor props along with ComponentAsWrapperProps
type IFancyActionWrapper = {
  children: React.ReactNode;
  WrapperComponent?: React.ReactElement;
} & (TNativeButtonProps | TNativeAnchorProps);
// --------------------------------------------------------------------------- //
// ---- FancyActionWrapper that wrapps the cildren in a "a" tag or button ---- //
// --------------------------------------------------------------------------- //
export default function FancyActionWrapper(props: IFancyActionWrapper) {
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
