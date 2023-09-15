import React from 'react';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

import FancyLoadingSpinner from '../../Components/UI/Atoms/FancyLoadingSpinner/FancyLoadingSpinner';
import FancyLoadingBar from '../../Components/UI/Atoms/FancyLoadingBar/FancyLoadingBar';
import ProgressBar from '../../Components/UI/Molecules/FancyProgressBar/FancyProgressBar'; // Corrected the import name
import { FancyCard } from '../../lib';

export default function LoadingSpinnerRoute() {
  const [progress, setProgress] = React.useState(0);

  const createProgress = () => {
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 1;
      if (progressValue >= 100) {
        setProgress(100);
        setTimeout(() => {
          progressValue = 0;
          setProgress(0);
        }, 5000);
      } else {
        setProgress(progressValue);
      }
    }, 50);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  };

  React.useEffect(() => {
    createProgress();
  }, []);

  return (
    <FancyCard>
      <DesignWrapper>
        <DesignArea title="Loading Spinner">
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <FancyLoadingBar />
            <ProgressBar progress={progress} label="test" labelAlign="center" progressCount progressAlign="right" />
            <FancyLoadingSpinner size="xxl" />
          </div>
        </DesignArea>
      </DesignWrapper>
    </FancyCard>
  );
}
