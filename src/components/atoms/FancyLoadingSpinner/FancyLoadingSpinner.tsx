import React from 'react';

import { sizes } from './sizeSettings';
import { SpinnerContainer, StyledFancyLoadingSpinner, StyledInnerSpinner } from './FancyLoadingSpinner.model';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TLayer } from '@/types/TLayer';

// --------------------------------------------------------------------------- //
// ------------------ A Loadingspinner with different sizes ------------------ //
// --------------------------------------------------------------------------- //
interface IFancyLoadingSpinner {
  size?: keyof typeof sizes;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
}
export default function FancyLoadingSpinner({ size = 'md', themeType, layer }: IFancyLoadingSpinner) {
  return (
    <SpinnerContainer $size={size}>
      <StyledFancyLoadingSpinner $size={size} $themeType={themeType} $layer={layer} />
      <StyledInnerSpinner $size={size} />
    </SpinnerContainer>
  );
}
