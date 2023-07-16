import React from 'react';

import FancyDropDownMenue from '../../Components/UI/Organisms/FancyDropDownMenue/FancyDropDownMenue';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import FancyButton from '../../Components/UI/Molecules/FancyButton/FancyButton';

const items = [
  <FancyButton label="Button" design="primary" />,
  <FancyButton label="Button" design="secondary" />,
  <FancyButton label="Button" design="accent" />,
  <FancyButton label="Button" design="transparent" />,
];

export default function FancyDropDownMenueRoute() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DesignWrapper>
      <DesignArea title="FancyDropDownMenue">
        <FancyButton onClick={() => setIsOpen(!isOpen)} label="Open Menue"></FancyButton>
        <FancyDropDownMenue isOpen={isOpen} items={items} alignHorizontal="right" alignVertical="top" width="50%">
          <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            <FancyButton label="Button" design="primary" />
            <FancyButton label="Button" design="secondary" />
            <FancyButton label="Button" design="accent" />
          </div>
        </FancyDropDownMenue>
      </DesignArea>
    </DesignWrapper>
  );
}
