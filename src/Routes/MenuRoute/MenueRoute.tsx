/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react';

import { FancyButton } from '../../lib';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import Popover from '../../Components/utils/FancyPopover/Popover';
import FancyPopover from '../../Components/utils/FancyPopover/FancyPopover';
import FancyMenueItem from '../../Components/templates/FancyMenueComponent/FancyMenuItem/FancyMenuItem';
import FancyMenuList from '../../Components/templates/FancyMenueComponent/FancyMenu/FancyMenu';
import SVGCheckMark from '@/Components/icons/SVGCheckMark/SVGCheckMark';

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
              <FancyMenuList.Divider bold label="Test" textAlignment="right" />
              <FancyMenuList.Divider label="Test" icon={<SVGCheckMark />} textAlignment="left" noLine />
              <FancyMenuList.Divider label="Test" icon={<SVGCheckMark />} textAlignment="center" />
              <FancyMenuList.Divider label="Test" textAlignment="center" />
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
