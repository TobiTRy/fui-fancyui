import React from 'react';

import Chip from '../../Components/UI/Atoms/Chip/Chip';

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
