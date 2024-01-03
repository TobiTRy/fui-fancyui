import React from 'react';
import { CSSProp } from 'styled-components';

import { IgenerateListItemStyle } from './SwitchList.style';
import { IActiveSwitchIndicator } from '@/components/atoms/SwitchActiveIndicator/SwitchActiveIndicator';
import { TFancyFlexBoxProps } from '@/components/templates/FancyFlexBox/FancyFlexBox.model';
import { TSpacings } from '@/types/TSpacings';

// the props for the SwitchActiveIndicator component
type TSwitchActiveIndicator = Omit<IActiveSwitchIndicator, 'itemNumber'>;

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
