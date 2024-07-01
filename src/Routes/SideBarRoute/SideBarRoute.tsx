import SideBar from '@/components/molecules/SideBar/SideBar';
import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import { FancySideBar } from '@/components/organisms/FancySideBar';
import { useState } from 'react';
import SideBarItem from '@/components/molecules/SideBarItem/SideBarItem';
import SVGCheckMark from '@/components/icons/SVGCheckMark/SVGCheckMark';

export default function SideBarRoute() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DesignWrapper style={{ height: '100%' }}>
      <DesignArea title="Sidebbar" style={{ display: 'flex', flexDirection: 'column' }}>
        <button onClick={() => setIsOpen(!isOpen)}>Toggle SideBar</button>

        <div style={{ height: '400px' }}>
          <FancySideBar
            isOpen={isOpen}
            openWidth="200px"
            slotContent={[
              <SideBarItem label="Test" hoverLayer={4} icon={<SVGCheckMark />} />,
              <SideBarItem label="Test" hoverLayer={4} icon={<SVGCheckMark />} />,
              <SideBarItem label="Test" hoverLayer={4} icon={<SVGCheckMark />} />,
            ]}
          />
        </div>

        <div style={{ height: '400px' }}>
          <SideBar isOpen={isOpen} openWidth="200px">
            <p>Mooin</p>
          </SideBar>
        </div>
        <div style={{ height: '400px' }}>
          <SideBar isOpen={isOpen} openWidth="200px">
            <p>Mooin</p>
          </SideBar>
        </div>
      </DesignArea>
    </DesignWrapper>
  );
}
