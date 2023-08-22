import React from 'react';

import Chip from '../../Components/UI/Molecules/Chip/Chip';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

export default function ChipsRoute() {
  return (
    <DesignWrapper>
      <DesignArea title='Chip'>
        <Chip />
      </DesignArea>
    </DesignWrapper>
  );
}
