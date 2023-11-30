import React from 'react';

import FancyDropDownMenue from '../../Components/organisms/FancyDropDownMenue/FancyDropDownMenue';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import FancyButton from '../../Components/organisms/FancyButton/FancyButton';

export default function FancyDropDownMenueRoute() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DesignWrapper>
      <DesignArea title="FancyDropDownMenue">
        <FancyButton onClick={() => setIsOpen(!isOpen)} label="Open Menue"></FancyButton>
        <FancyDropDownMenue isOpen={isOpen} alignHorizontal="right" alignVertical="top" width="50%">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <FancyButton label="Button" themeType="primary" />
            <FancyButton label="Button" themeType="secondary" />
            <FancyButton label="Button" themeType="accent" />
          </div>
        </FancyDropDownMenue>
      </DesignArea>
    </DesignWrapper>
  );
}
