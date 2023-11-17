import React from 'react';

import { TUiColorsType } from '../../Design/color/designColor';
import { borderRadius, spacingPx } from '../../Design/designSizes';
import { TLayer } from '../../Design/color/generateColorSteps';
import { ActiveSwitchIndicator, Wrapper } from './SwitchActiveIndicator.style';

export interface IActiveSwitchIndicator {
  $itemNumber: number;
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
  $tabSpacing?: keyof typeof spacingPx;
  $type?: 'bolb' | 'underline' | 'topline';
  $rounded?: keyof typeof borderRadius | string;
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
