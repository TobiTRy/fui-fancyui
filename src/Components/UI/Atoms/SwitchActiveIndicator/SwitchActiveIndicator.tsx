import React from 'react';

import { TUiColorsType } from '../../Design/color/designColor';
import { IBorderRadius, spacingPx } from '../../Design/design';
import { TLayer } from '../../Design/color/generateColorSteps';
import { ActiveSwitchIndicator } from './SwitchActiveIndicator.style';


export interface IActiveSwitchIndicator {
  $itemNumber: number;
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
  $tabSpacing?: keyof typeof spacingPx;
  $type?: 'bolb' | 'underline';
  $rounded?: keyof IBorderRadius | string;
  $outlined?: boolean;
  $direction?: 'horizontal' | 'vertical';
}
// --------------------------------------------------------------------------- //
// -------- Create a Incator for wich Item in a Switch List ist activ  ------- //
// --------------------------------------------------------------------------- //
export default function SwitchActiveIndicator(props: IActiveSwitchIndicator) {
  return <ActiveSwitchIndicator {...props} />;
}
