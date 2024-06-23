/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react';

import { FancyButton } from '../../../lib';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import Popover from '../../components/shared/FancyPopover/Popover';
import FancyPopover from '../../components/shared/FancyPopover/FancyPopover';
import FancyMenueItem from '../../components/templates/FancyMenuItem/FancyMenuItem';
import { Menu } from '@/components/molecules/Menue';
import SVGCheckMark from '@/components/icons/SVGCheckMark/SVGCheckMark';

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
            <Menu outlined>
              <Menu.Item label="Muuusettingshhh" icon={<>⚙️</>} />
              <Menu.Divider sizeC="md" label="Test" textAlignment="right" />
              <Menu.Divider label="Test" icon={<SVGCheckMark />} textAlignment="left" noLine />
              <Menu.Divider label="Test" sizeC="md" icon={<SVGCheckMark />} textAlignment="center" />
              <Menu.Divider label="Test" textAlignment="center" />
              <FancyMenueItem sizeC="md" label="Logout" icon={<SVGCheckMark />} />
              <FancyMenueItem sizeC="md" label="Logout" icon={<SVGCheckMark />} />
              <FancyMenueItem sizeC="md" label="Logout" icon={<SVGCheckMark />} />
              <FancyMenueItem sizeC="md" label="Logout" icon={<SVGCheckMark />} />
              <FancyMenueItem sizeC="md" label="Logout" icon={<SVGCheckMark />} />
              <FancyMenueItem sizeC="md" label="Logout" icon={<SVGCheckMark />} />
            </Menu>
          }
        ></FancyPopover>
      </DesignArea>
    </DesignWrapper>
  );
}
