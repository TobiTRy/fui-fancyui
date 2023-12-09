import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';
import { ActiveSwitchIndicator, Wrapper } from './SwitchActiveIndicator.style';
import { TBorderRadiusSizes } from '@/interface/TBorderRadius';
import { TSpacings } from '@/interface/TSpacings';

export interface IActiveSwitchIndicator {
  itemNumber: number;
  themeType?: TThemeTypes;
  layer?: TLayer;
  tabSpacing?: TSpacings;
  type?: 'bolb' | 'underline' | 'topline';
  rounded?: TBorderRadiusSizes | string;
  outlined?: boolean;
  direction?: 'horizontal' | 'vertical';
  indicatorWidth?: string;
  className?: string;
}
// --------------------------------------------------------------------------- //
// -------- Create a Incator for wich Item in a Switch List ist activ  ------- //
// --------------------------------------------------------------------------- //
export default function SwitchActiveIndicator(props: IActiveSwitchIndicator) {
  const { itemNumber, tabSpacing, direction, className, ...switchProps } = props;
  return (
    <Wrapper $itemNumber={itemNumber} className={className} $tabSpacing={tabSpacing} $direction={direction}>
      <ActiveSwitchIndicator
        $indicatorWidth={switchProps.indicatorWidth}
        $themeType={switchProps.themeType}
        $layer={switchProps.layer}
        $outlined={switchProps.outlined}
        $rounded={switchProps.rounded}
        $type={switchProps.type}
      />
    </Wrapper>
  );
}
