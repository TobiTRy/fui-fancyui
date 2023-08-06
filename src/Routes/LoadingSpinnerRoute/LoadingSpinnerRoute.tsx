import React from 'react';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

import FancyLoadingSpinner  from '../../Components/UI/Atoms/FancyLoadingSpinner/FancyLoadingSpinner';
import FancyLoadingBar from '../../Components/UI/Atoms/FancyLoadingBar/FancyLoadingBar';
import ProzessBar from '../../Components/UI/Atoms/ProgressBar/ProzessBar';

export default function LoadingSpinnerRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="Loading Spinner">
        <p>Hii</p>
        <ProzessBar progress={10}/>
        <FancyLoadingSpinner />
        <FancyLoadingBar />
      </DesignArea>
    </DesignWrapper>
  );
}
