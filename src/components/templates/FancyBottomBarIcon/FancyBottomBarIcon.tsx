import React, { ComponentProps } from 'react';

import ComponentAndActionWrapper, {
  IComponentAndActionWrapper,
} from '@/components/molecules/ComponentAndActionWrapper/ComponentAndActionWrapper';
import { BottomBarIcon } from '@/components/molecules/BottomBarIcon';

export type IFancyBottomBarIcon = ComponentProps<typeof BottomBarIcon> & IComponentAndActionWrapper;
// --------------------------------------------------------------------------- //
// ------ This Component Puts only the content and a wrapper together -------- //
// --------------------------------------------------------------------------- //
export default function FancyBottomBarIcon(props: IFancyBottomBarIcon) {
  const { WrapperComponent, type, href, onClick, ...rest } = props;

  return (
    <ComponentAndActionWrapper
      WrapperComponent={WrapperComponent}
      type={type ?? 'a'}
      href={href}
      onClick={() => {
        onClick?.();
      }}
    >
      <BottomBarIcon {...rest} />
    </ComponentAndActionWrapper>
  );
}
