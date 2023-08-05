import React from 'react';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

import FancyLoadingSpinner  from '../../Components/UI/Atoms/FancyLoadingSpinner/FancyLoadingSpinner';
import FancyLoadingBar from '../../Components/UI/Atoms/FancyLoadingBar/FancyLoadingBar';

export default function LoadingSpinnerRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="Loading Spinner">
        <FancyLoadingSpinner />
        <FancyLoadingBar />
      </DesignArea>
    </DesignWrapper>
  );
}
