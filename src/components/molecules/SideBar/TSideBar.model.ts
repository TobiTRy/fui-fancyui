import { ReactNode } from 'react';
import { TFancyBox } from '@/components/atoms/FancyBox';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TComponentSizesMid } from '@/types/TComponentSizes';
import { TSpacings } from '@/types/TSpacings';

export type TSideBar = {
  isOpen?: boolean;
  openWidth?: string;
  children?: ReactNode;
  borderRadius?: TBorderRadiusSizes;
  sizeC?: TComponentSizesMid;
  gapBetweenItems?: TSpacings;
};

export type TSideBarWithAllAttrs = TSideBar & TFancyBox;
