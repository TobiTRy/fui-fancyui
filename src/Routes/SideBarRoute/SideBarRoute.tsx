import SideBar from '@/components/molecules/SideBar/SideBar';
import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import { FancySideBar } from '@/components/organisms/FancySideBar';
import { useState } from 'react';
import SVGCheckMark from '@/components/icons/SVGCheckMark/SVGCheckMark';
import { FancyButton } from '@/components/organisms/FancyButton';
import { SVGDoubleChevronLeft } from '@/components/icons/SVGDoubleChevronLeft/SVGDoubleChevronLeft';
import { SVGDoubleChevronRight } from '@/components/icons/SVGDoubleChevronRight/SVGDoubleChevronRight';
import { FancySideBarItem } from '@/components/templates/FancySideBarItem';

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
              <FancySideBarItem label="Test" hoverLayer={4} icon={<SVGCheckMark />} />,
              <FancySideBarItem label="Test" hoverLayer={4} icon={<SVGCheckMark />} />,
              <FancySideBarItem label="Test" hoverLayer={4} icon={<SVGCheckMark />} />,
            ]}
            slotBottom={
              <FancyButton
                wide
                noSize
                layer={0}
                themeType="primary"
                externalStyle={{
                  padding: '8px',
                }}
                appendClassNameOnStyle
                onClick={() => setIsOpen(!isOpen)}
                oneToOne={false}
                icon={isOpen ? <SVGDoubleChevronLeft /> : <SVGDoubleChevronRight />}
              />
            }
          />
        </div>

        <div style={{ height: '400px' }}>
          <SideBar isOpen={isOpen} openWidth="200px">
            <FancySideBarItem label="Test" hoverLayer={4} icon={<SVGCheckMark />} />
            <FancySideBarItem label="Test" hoverLayer={4} icon={<SVGCheckMark />} />
            <FancySideBarItem label="Test" hoverLayer={4} icon={<SVGCheckMark />} />
            <FancyButton
              wide
              noSize
              layer={0}
              themeType="primary"
              externalStyle={{
                padding: '8px',
              }}
              appendClassNameOnStyle
              onClick={() => setIsOpen(!isOpen)}
              oneToOne={false}
              icon={isOpen ? <SVGDoubleChevronLeft /> : <SVGDoubleChevronRight />}
            />
          </SideBar>
        </div>
        <div style={{ height: '400px' }}>
          <SideBar isOpen={isOpen} openWidth="200px"></SideBar>
        </div>
      </DesignArea>
    </DesignWrapper>
  );
}
