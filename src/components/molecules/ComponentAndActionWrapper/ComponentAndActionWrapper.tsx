'use client';

import { ComponentAsWrapper } from '@/components/shared/ComponentAsWrapper';
import { FancyActionWrapper } from '@/components/atoms/FancyActionWrapper';
import { TComponentAndActionWrapper } from './TComponentAndActionWrapper.model';

// --------------------------------------------------------------------------------- //
//  The Component warps the chilirden in a Specific Action element or Custom element //
// -------------------------------------------------------------------------------- //
export default function ComponentAndActionWrapper(props: TComponentAndActionWrapper) {
  const { WrapperComponent, type, children, onClick } = props;

  return WrapperComponent ? (
    <ComponentAsWrapper wrapper={WrapperComponent} children={children} />
  ) : type === 'button' ? (
    <FancyActionWrapper as={'button'} onClick={onClick} children={children} />
  ) : (
    <FancyActionWrapper as={'a'} href={props.href} onClick={onClick} children={children} />
  );
}
