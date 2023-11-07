import React, { useRef, useState } from 'react';

import { FancyButton } from '../../lib';

import Menu from '../../Components/UI/Molecules/Menu/Menu';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import Popover from '../../Components/UI/HelperFunctions/FancyPopover/Popover';
import FancyPopover from '../../Components/UI/HelperFunctions/FancyPopover/FancyPopover';

export default function MenueRoute() {
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  return (
    <DesignWrapper>
      <DesignArea title="Teststs" style={{ justifyContent: 'flex-end' }}>
        <FancyPopover offsetY={10} refComponent={<FancyButton label="Hi 2" />} contentComponent={<Menu />}></FancyPopover>
      </DesignArea>
    </DesignWrapper>
  );
}
