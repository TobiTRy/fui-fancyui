import React from 'react';
import { CSSProp } from 'styled-components';

import { TFancyFlexBox } from '@/components/templates/FancyFlexBox/TFancyFlexBox.model';
import { TSpacings } from '@/types/TSpacings';
import { TActiveSwitchIndicator } from '@/components/atoms/SwitchActiveIndicator';

// the props for the SwitchActiveIndicator component
type TSwitchActiveIndicator = Omit<TActiveSwitchIndicator, 'itemNumber'>;

// the props for the SwitchList component
interface IBottomBarListProps {
  children?: React.ReactNode;
  whichIndexIsSelected?: number;
  activeItemHandler?: (activeKey: number) => void;
  externalStyle?: CSSProp;
  gap?: TSpacings;
}

type TFlexBoxOmitGap = Omit<TFancyFlexBox, 'gap'>;

// the props for the SwitchList component with the props for the SwitchActiveIndicator component and the FancyFlexBox component
export type TSwitchList = IBottomBarListProps & {
  switchIndicator?: TSwitchActiveIndicator;
  flexBoxProps?: TFlexBoxOmitGap;
};
