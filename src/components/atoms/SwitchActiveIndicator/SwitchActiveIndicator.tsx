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
    indicatorHeight,
    type,
    externalStyle,
    ...htmlProps
  } = props;

  return (
    <Wrapper
      $itemNumber={itemNumber}
      $tabSpacing={tabSpacing}
      $direction={direction}
      $externalStyle={externalStyle}
      {...htmlProps}
    >
      <ActiveSwitchIndicator
        $indicatorWidth={indicatorWidth}
        $indicatorHeight={indicatorHeight}
        $themeType={themeType}
        $layer={layer}
        $outlined={outlined}
        $borderRadius={borderRadius}
        $type={type}
      />
    </Wrapper>
  );
}
