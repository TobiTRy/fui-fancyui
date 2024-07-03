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
          <SideBar sizeC="md" isOpen={isOpen} openWidth="200px">
            <FancySideBarItem sizeC="md" label="Test" hoverLayer={4} icon={<SVGCheckMark />} />
            <FancySideBarItem
              sizeC="md"
              label="Test"
              hoverLayer={4}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                </svg>
              }
            />
            <FancySideBarItem sizeC="md" label="Test" hoverLayer={4} icon={<SVGCheckMark />} />
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
