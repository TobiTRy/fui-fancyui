import React from 'react';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

import FancyLoadingSpinner  from '../../Components/UI/Atoms/FancyLoadingSpinner/FancyLoadingSpinner';

export default function LoadingSpinnerRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="Loading Spinner">
        <FancyLoadingSpinner />
      </DesignArea>
    </DesignWrapper>
  );
}
