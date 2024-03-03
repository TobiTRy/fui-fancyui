import React from 'react';
import { CSSProp } from 'styled-components';

import { IgenerateListItemStyle } from './SwitchList.style';

import { TFancyFlexBoxProps } from '@/components/templates/FancyFlexBox/FancyFlexBox.model';
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

type TFlexBoxOmitGap = Omit<TFancyFlexBoxProps, 'gap'>;

// the props for the SwitchList component with the props for the SwitchActiveIndicator component and the FancyFlexBox component
export type TSwitchList = IBottomBarListProps &
  Omit<IgenerateListItemStyle, 'isActive'> & {
    switchIndicator?: TSwitchActiveIndicator;
    flexBoxProps?: TFlexBoxOmitGap;
  };
