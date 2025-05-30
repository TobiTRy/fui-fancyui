'use client';

import { LoadingBar, LoadingContainer } from '@/components/atoms/FancyLoadingBar/FancyLoadingBar.style';
import { TFancyLoadingBarWithHTMLProps } from '@/components/atoms/FancyLoadingBar/TFancyLoadingBar.model';

// ----------------------------------------------------- //
// -------- A Loadingbar that indicates loading -------- //
// ----------------------------------------------------- //
export default function FancyLoadingBar(props: TFancyLoadingBarWithHTMLProps) {
  const { themeType, layer, externalStyle, ...rest } = props;

  return (
    <LoadingContainer $externalStyle={externalStyle} {...rest}>
      <LoadingBar $themeType={themeType} $layer={layer} />
    </LoadingContainer>
  );
}
