import React from 'react';

import { ComponentAsWrapper } from '@/components/shared/ComponentAsWrapper';
import { FancyActionWrapper } from '@/components/atoms/FancyActionWrapper';

type TAnchorProps = {
  type?: 'a';
  href?: string; // `href` is mandatory for an anchor
  onClick?: () => void; // More specific type for `onClick`
};

type TButtonProps = {
  type: 'button';
  onClick?: () => void; // More specific type for `onClick`
  href?: string;
};

export type IComponentAndActionWrapper = {
  WrapperComponent?: React.ReactElement;
  children?: React.ReactNode;
} & (TAnchorProps | TButtonProps);
// --------------------------------------------------------------------------------- //
//  The Component warps the chilirden in a Specific Action element or Custom element //
// -------------------------------------------------------------------------------- //
export default function ComponentAndActionWrapper(props: IComponentAndActionWrapper) {
  const { WrapperComponent, type, children, onClick } = props;

  return WrapperComponent ? (
    <ComponentAsWrapper wrapper={WrapperComponent} children={children} />
  ) : type === 'button' ? (
    <FancyActionWrapper as={'button'} onClick={onClick} children={children} />
  ) : (
    <FancyActionWrapper as={'a'} href={props.href} onClick={onClick} children={children} />
  );
}
