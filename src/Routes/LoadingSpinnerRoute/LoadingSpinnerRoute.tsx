import React from 'react';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

import FancyLoadingSpinner from '../../components/atoms/FancyLoadingSpinner/FancyLoadingSpinner';
import FancyLoadingBar from '../../components/atoms/FancyLoadingBar/FancyLoadingBar';
import ProgressBar from '../../components/molecules/FancyProgressBar/FancyProgressBar'; // Corrected the import name
import { Card } from '@/components/molecules/Card';

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
    <Card>
      <DesignWrapper>
        <DesignArea title="Loading Spinner">
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <FancyLoadingBar />
            <ProgressBar
              progress={progress}
              label="test"
              labelAlign="center"
              progressCount
              progressAlign="left"
              themeType="primary"
            />
            <FancyLoadingSpinner sizeC="xxl" />
          </div>
        </DesignArea>
      </DesignWrapper>
    </Card>
  );
}
