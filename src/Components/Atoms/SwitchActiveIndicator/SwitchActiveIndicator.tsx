import React from 'react';

import { TThemeTypes } from '@/components/core/interface/TUiColors';
import { TLayer } from '@/components/core/interface/TLayer';
import { ActiveSwitchIndicator, Wrapper } from './SwitchActiveIndicator.style';
import { TBorderRadiusSizes } from '@/components/core/interface/TBorderRadius';
import { TSpacings } from '@/components/core/interface/TSpacings';

export interface IActiveSwitchIndicator {
  $itemNumber: number;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
  $tabSpacing?: TSpacings;
  $type?: 'bolb' | 'underline' | 'topline';
  $rounded?: TBorderRadiusSizes | string;
  $outlined?: boolean;
  $direction?: 'horizontal' | 'vertical';
  $indicatorWidth?: string;
}
// --------------------------------------------------------------------------- //
// -------- Create a Incator for wich Item in a Switch List ist activ  ------- //
// --------------------------------------------------------------------------- //
export default function SwitchActiveIndicator(props: IActiveSwitchIndicator) {
  const { $itemNumber, $tabSpacing, $direction, ...switchProps } = props;
  return (
    <Wrapper $itemNumber={$itemNumber} $tabSpacing={$tabSpacing} $direction={$direction}>
      <ActiveSwitchIndicator {...switchProps} />
    </Wrapper>
  );
}
