'use client';

import { TFancyLoadingSpinner } from '@/components/atoms/FancyLoadingSpinner/IFancyLoadingSpinner.model';
import { SpinnerContainer, StyledFancyLoadingSpinner, StyledInnerSpinner } from './FancyLoadingSpinner.model';

// --------------------------------------------------------------------------- //
// ------------------ A Loadingspinner with different sizes ------------------ //
// --------------------------------------------------------------------------- //
export default function FancyLoadingSpinner(props: TFancyLoadingSpinner) {
  const { sizeC = 'md', themeType = 'accent', layer } = props;

  return (
    <SpinnerContainer $sizeC={sizeC}>
      <StyledFancyLoadingSpinner $sizeC={sizeC} $themeType={themeType} $layer={layer} />
      <StyledInnerSpinner $themeType={themeType} $layer={layer} $sizeC={sizeC} />
    </SpinnerContainer>
  );
}
