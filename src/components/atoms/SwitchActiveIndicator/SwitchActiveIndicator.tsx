import { TActiveSwitchIndicatorWithHTMLAttrs } from './TSwitchActiveindicator.model';
import { ActiveSwitchIndicator, Wrapper } from './SwitchActiveIndicator.style';

// --------------------------------------------------------------------------- //
// -------- Create a Incator for wich Item in a Switch List ist activ  ------- //
// --------------------------------------------------------------------------- //
export default function SwitchActiveIndicator(props: TActiveSwitchIndicatorWithHTMLAttrs) {
  const {
    itemNumber,
    tabSpacing,
    direction,
    indicatorWidth,
    themeType,
    layer,
    outlined,
    borderRadius,
    type,
    ...htmlProps
  } = props;

  return (
    <Wrapper $itemNumber={itemNumber} $tabSpacing={tabSpacing} $direction={direction} {...htmlProps}>
      <ActiveSwitchIndicator
        $indicatorWidth={indicatorWidth}
        $themeType={themeType}
        $layer={layer}
        $outlined={outlined}
        $borderRadius={borderRadius}
        $type={type}
      />
    </Wrapper>
  );
}
