import React from 'react';

import FancyEditBar from '../../Components/organisms/FancyEditBar/FancyEditBar';
import FancButton from '../../Components/organisms/FancyButton/FancyButton';
import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';

export default function EditBarRoute() {
  const [isActive, setIsActive] = React.useState(false);

  const openEditBarHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <DesignWrapper>
      <DesignArea title="EditBar">
        <FancButton label="test" onClick={openEditBarHandler} />
        <FancyEditBar active={isActive} sectionType="sectionBox" />
      </DesignArea>
    </DesignWrapper>
  );
}
