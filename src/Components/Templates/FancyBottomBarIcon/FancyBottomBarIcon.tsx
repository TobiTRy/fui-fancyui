import React, { ComponentProps } from 'react';

import ComponentAndActionWrapper, { IComponentAndActionWrapper } from '../../molecules/ComponentAndActionWrapper/ComponentAndActionWrapper';
import BottomBarIcon from '../../molecules/BottomBarIcon/BottomBarIcon';

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
        onClick && onClick();
      }}
    >
      <BottomBarIcon {...rest} />
    </ComponentAndActionWrapper>
  );
}
