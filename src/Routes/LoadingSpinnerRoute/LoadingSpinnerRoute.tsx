import React from 'react';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

import FancyLoadingSpinner from '../../Components/UI/Atoms/FancyLoadingSpinner/FancyLoadingSpinner';
import FancyLoadingBar from '../../Components/UI/Atoms/FancyLoadingBar/FancyLoadingBar';
import ProgressBar from '../../Components/UI/Atoms/ProgressBar/ProgressBar'; // Corrected the import name

export default function LoadingSpinnerRoute() {
  const [progress, setProgress] = React.useState(0);

  const createProgress = () => {
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 1;
      setProgress(progressValue);
      if (progressValue >= 100) {
        clearInterval(interval);
      }
    }, 50);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  };

  React.useEffect(() => {
    createProgress();
  }, []);

  return (
    <DesignWrapper>
      <DesignArea title="Loading Spinner">
        <p style={{ marginBottom: '20px' }}>Hii</p>
        <ProgressBar progress={progress} />
        <FancyLoadingSpinner  />
        <FancyLoadingBar />
      </DesignArea>
    </DesignWrapper>
  );
}
