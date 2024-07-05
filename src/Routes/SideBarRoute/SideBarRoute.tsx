import SideBar from '@/components/molecules/SideBar/SideBar';
import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import { FancySideBar } from '@/components/organisms/FancySideBar';
import { useState } from 'react';
import SVGCheckMark from '@/components/icons/SVGCheckMark/SVGCheckMark';
import { FancySideBarItem } from '@/components/templates/FancySideBarItem';
import FancySideBarOpenButton from '@/components/templates/FancySideBarOpenButton/FancySideBarOpenButton';

export default function SideBarRoute() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DesignWrapper style={{ height: '100%' }}>
      <DesignArea title="Sidebbar" style={{ display: 'flex', flexDirection: 'column' }}>
        <button onClick={() => setIsOpen(!isOpen)}>Toggle SideBar</button>

        <div style={{ height: '400px', display: 'flex', justifyContent: 'flex-end' }}>
          <FancySideBar
            sizeC="lg"
            isOpen={isOpen}
            openWidth="200px"
            align="right"
            slotContent={[
              <FancySideBarItem noMargin sizeC="lg" label="Test" hoverLayer={4} icon={<SVGCheckMark />} />,
              <FancySideBarItem noMargin sizeC="lg" label="Test" hoverLayer={4} icon={<SVGCheckMark />} />,
              <FancySideBarItem noMargin sizeC="lg" label="Test" hoverLayer={4} icon={<SVGCheckMark />} />,
              <FancySideBarItem noMargin sizeC="lg" label="Test" hoverLayer={4} icon={<SVGCheckMark />} />,
              <FancySideBarItem noMargin sizeC="lg" label="Test" hoverLayer={4} icon={<SVGCheckMark />} />,
              <FancySideBarItem noMargin sizeC="lg" label="Test" hoverLayer={4} icon={<SVGCheckMark />} />,
              <FancySideBarItem noMargin sizeC="lg" label="Test" hoverLayer={4} icon={<SVGCheckMark />} />,
              <FancySideBarItem noMargin sizeC="lg" label="Test" hoverLayer={4} icon={<SVGCheckMark />} />,
            ]}
            slotBottom={
              <FancySideBarOpenButton
                arrowDirectionClosed="right"
                onClick={() => setIsOpen(!isOpen)}
                sizeC="lg"
                justify="left"
                noMargin
                isOpen={isOpen}
              />
            }
            slotTop={
              <FancySideBarOpenButton
                arrowDirectionClosed="right"
                onClick={() => setIsOpen(!isOpen)}
                sizeC="lg"
                noMargin
                justify="left"
                isOpen={isOpen}
              />
            }
          />
        </div>

        <div style={{ height: '400px' }}>
          <SideBar sizeC="md" isOpen={isOpen} openWidth="200px">
            <FancySideBarItem
              noMargin
              wide
              layer={2}
              borderRadius={'0'}
              sizeC="md"
              label="Test"
              hoverLayer={4}
              icon={<SVGCheckMark />}
            />

            <FancySideBarItem
              sizeC="md"
              label="Test"
              hoverLayer={4}
              noMargin
              wide
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
            <FancySideBarItem noMargin wide sizeC="md" label="Test" hoverLayer={4} icon={<SVGCheckMark />} />

            <FancySideBarOpenButton onClick={() => setIsOpen(!isOpen)} justify="center" sizeC="md" isOpen={isOpen} />
          </SideBar>
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

            <FancySideBarOpenButton onClick={() => setIsOpen(!isOpen)} justify="center" sizeC="md" isOpen={isOpen} />
          </SideBar>
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

            <FancySideBarOpenButton onClick={() => setIsOpen(!isOpen)} justify="center" sizeC="md" isOpen={isOpen} />
          </SideBar>
        </div>
        <div style={{ height: '400px' }}>
          <SideBar isOpen={isOpen} openWidth="200px">
            <p>AJjk</p>
          </SideBar>
        </div>
      </DesignArea>
    </DesignWrapper>
  );
}
