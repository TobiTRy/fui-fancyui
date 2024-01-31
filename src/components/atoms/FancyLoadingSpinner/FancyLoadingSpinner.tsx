import React from 'react';

import { sizes } from './sizeSettings';
import { SpinnerContainer, StyledFancyLoadingSpinner, StyledInnerSpinner } from './FancyLoadingSpinner.model';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TLayer } from '@/types/TLayer';

// --------------------------------------------------------------------------- //
// ------------------ A Loadingspinner with different sizes ------------------ //
// --------------------------------------------------------------------------- //
interface IFancyLoadingSpinner {
  sizeC?: keyof typeof sizes;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
}
export default function FancyLoadingSpinner({ sizeC = 'md', themeType, layer }: IFancyLoadingSpinner) {
  return (
    <SpinnerContainer $sizeC={sizeC}>
      <StyledFancyLoadingSpinner $sizeC={sizeC} $themeType={themeType} $layer={layer} />
      <StyledInnerSpinner $sizeC={sizeC} />
    </SpinnerContainer>
  );
}
