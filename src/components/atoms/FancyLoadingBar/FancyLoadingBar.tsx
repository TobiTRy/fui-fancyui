import { LoadingBar, LoadingContainer } from '@/components/atoms/FancyLoadingBar/FancyLoadingBar.style';
import { TFancyLoadingBar } from '@/components/atoms/FancyLoadingBar/TFancyLoadingBar.model';

// ----------------------------------------------------- //
// -------- A Loadingbar that indicates loading -------- //
// ----------------------------------------------------- //
export default function FancyLoadingBar(props: TFancyLoadingBar) {
  const { themeType, layer, externalStyle } = props;

  return (
    <LoadingContainer $externalStyle={externalStyle}>
      <LoadingBar $themeType={themeType} $layer={layer} />
    </LoadingContainer>
  );
}
