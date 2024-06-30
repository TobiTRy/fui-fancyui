import SideBar from '@/components/molecules/SideBar/SideBar';
import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import { useState } from 'react';

export default function SideBarRoute() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DesignWrapper style={{ height: '100%' }}>
      <DesignArea title="Sidebbar">
        <button onClick={() => setIsOpen(!isOpen)}>Toggle SideBar</button>
        <div style={{ height: '400px' }}>
          <SideBar isOpen={isOpen} openWidth="200px">
            <p>Mooin</p>
          </SideBar>
        </div>
      </DesignArea>
    </DesignWrapper>
  );
}
