import React from 'react';

import { FancyButton } from '../../lib';

import Menu from '../../Components/UI/Molecules/Menu/Menu';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import usePopover from '../../Components/UI/Molecules/Menu/utils/usePopover';
import Popover from '../../Components/UI/Molecules/Menu/utils/Popover';

export default function MenueRoute() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { anchorEl, popoverStyle, updatePopoverStyle, togglePopover, popoverRef } = usePopover();

  return (
    <DesignWrapper>
      <DesignArea title="Teststs" style={{ justifyContent: 'flex-end' }}>
        <FancyButton label="Hiii" onClick={(e) => togglePopover(e)} />
        <Popover
        isOpen={Boolean(anchorEl)}
        style={popoverStyle}
        content={<Menu />}
        updatePopoverStyle={updatePopoverStyle}
        popoverRef={popoverRef}
      />
      </DesignArea>
    </DesignWrapper>
  );
}
