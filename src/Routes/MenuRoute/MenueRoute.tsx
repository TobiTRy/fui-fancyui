import React, { useRef, useState } from 'react';

import { FancyButton } from '../../lib';

import Menu from '../../Components/UI/Molecules/Menu/Menu';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import Popover from '../../Components/UI/HelperFunctions/Popover/Popover';
import FancyPopover from './FancyPopover';

export default function MenueRoute() {
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => {
    setPopoverVisible(!isPopoverVisible);
  };

  const closePopover = () => {
    setPopoverVisible(false);
  };

  return (
    <DesignWrapper>
      <DesignArea title="Teststs" style={{ justifyContent: 'flex-end' }}>
        <div ref={buttonRef} style={{ position: 'relative' }}>
          <FancyButton label="Hi" onClick={togglePopover} />
          <Popover buttonRef={buttonRef} content={<Menu />} isVisible={isPopoverVisible} onClose={closePopover} yOffset={5} xOffset={10} />
        </div>

        <FancyPopover offsetX={10} offsetY={10} refComponent={<FancyButton label="Hi 2" />} contentComponent={<Menu/>}></FancyPopover>
      </DesignArea>
    </DesignWrapper>
  );
}
