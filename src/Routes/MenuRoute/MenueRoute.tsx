import React from 'react';

import { FancyButton } from '../../lib';

import Menu from '../../Components/UI/Molecules/Menu/Menu';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

export default function MenueRoute() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DesignWrapper>
      <DesignArea title='Teststs'>
        <FancyButton label="Hiii" onClick={() => setIsOpen(!isOpen)} />
        <Menu isOpen={isOpen} />
      </DesignArea>
    </DesignWrapper>
  );
}
