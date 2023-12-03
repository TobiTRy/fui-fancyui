import React from 'react';

import { sizes } from './sizeSettings';
import { SpinnerContainer, StyledFancyLoadingSpinner, StyledInnerSpinner } from './FancyLoadingSpinner.model';
import { TThemeTypesNotTransparent } from '@/interface/TThemeTypesNotTransparent';
import { TLayer } from '@/interface/TLayer';

// --------------------------------------------------------------------------- //
// ------------------ A Loadingspinner with different sizes ------------------ //
// --------------------------------------------------------------------------- //
interface IFancyLoadingSpinner {
  size?: keyof typeof sizes;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
}
export default function FancyLoadingSpinner({ size = 'md' }: IFancyLoadingSpinner) {
  return (
    <SpinnerContainer $size={size}>
      <StyledFancyLoadingSpinner $size={size} />
      <StyledInnerSpinner $size={size} />
    </SpinnerContainer>
  );
}
