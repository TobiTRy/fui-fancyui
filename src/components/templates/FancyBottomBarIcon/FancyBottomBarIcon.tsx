import { BottomBarIcon } from '@/components/molecules/BottomBarIcon';
import ComponentAndActionWrapper from '@/components/molecules/ComponentAndActionWrapper/ComponentAndActionWrapper';

import { TFancyBottomBarIcon } from './TFancyBottomBarIcon.model';

// --------------------------------------------------------------------------- //
// ------ This Component Puts only the content and a wrapper together -------- //
// --------------------------------------------------------------------------- //
export default function FancyBottomBarIcon(props: TFancyBottomBarIcon) {
  const { WrapperComponent, type, href, onClick, ...iconProps } = props;

  console.log(iconProps.layer, iconProps.activeLayer);
  return (
    <ComponentAndActionWrapper
      WrapperComponent={WrapperComponent}
      type={type ?? 'a'}
      href={href}
      onClick={() => {
        onClick?.();
      }}
    >
      <BottomBarIcon {...iconProps} />
    </ComponentAndActionWrapper>
  );
}
