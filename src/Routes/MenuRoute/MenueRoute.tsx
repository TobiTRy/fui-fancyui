import React, { useRef, useState } from 'react';

import { FancyButton } from '../../lib';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import Popover from '../../Components/UI/HelperFunctions/FancyPopover/Popover';
import FancyPopover from '../../Components/UI/HelperFunctions/FancyPopover/FancyPopover';
import FancyMenueItem from '../../Components/UI/Templates/FancyMenueComponent/FancyMenuItem/FancyMenuItem';
import FancyMenuList from '../../Components/UI/Templates/FancyMenueComponent/FancyMenu/FancyMenu';

export default function MenueRoute() {
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  return (
    <DesignWrapper>
      <DesignArea title="Teststs" style={{ justifyContent: 'flex-end' }}>
        <FancyPopover
          offsetY={10}
          refComponent={<FancyButton label="Hi 2" />}
          contentComponent={
            <FancyMenuList outlined>
              <FancyMenuList.Item label="Muuusettingshhh" icon={<>⚙️</>} />
              <FancyMenuList.Divider />
              <FancyMenueItem label="Logout" icon={<>🚪</>} />
              <FancyMenueItem label="Logout" icon={<>🚪</>} />
              <FancyMenueItem label="Logout" icon={<>🚪</>} />
              <FancyMenueItem label="Logout" icon={<>🚪</>} />
              <FancyMenueItem label="Logout" icon={<>🚪</>} />
            </FancyMenuList>
          }
        ></FancyPopover>
      </DesignArea>
    </DesignWrapper>
  );
}
