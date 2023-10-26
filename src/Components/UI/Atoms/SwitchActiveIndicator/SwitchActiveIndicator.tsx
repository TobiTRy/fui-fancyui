import React from 'react';

import { TUiColorsType } from '../../Design/color/designColor';
import { IBorderRadius, spacingPx } from '../../Design/design';
import { TLayer } from '../../Design/color/generateColorSteps';
import { ActiveSwitchIndicator, Wrapper } from './SwitchActiveIndicator.style';

export interface IActiveSwitchIndicator {
  $itemNumber: number;
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
  $tabSpacing?: keyof typeof spacingPx;
  $type?: 'bolb' | 'underline' | 'topline';
  $rounded?: keyof IBorderRadius | string;
  $outlined?: boolean;
  $direction?: 'horizontal' | 'vertical';
  $width?: string;
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
