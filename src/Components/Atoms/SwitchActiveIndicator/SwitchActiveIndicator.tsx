import React from 'react';

import { TThemeTypes } from '@/Components/Interface/TUiColors';
import { TLayer } from '@/Components/Interface/TLayer';
import { ActiveSwitchIndicator, Wrapper } from './SwitchActiveIndicator.style';
import { TBorderRadiusSizes } from '@/Components/Interface/TBorderRadius';
import { TSpacings } from '@/Components/Interface/TSpacings';

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
