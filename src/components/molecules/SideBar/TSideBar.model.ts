import { TFancyBox } from '@/components/atoms/FancyBox';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TComponentSizes } from '@/types/TComponentSizes';
import { ReactNode } from 'react';

export type TSideBar = {
  isOpen?: boolean;
  openWidth?: string;
  children: ReactNode;
  borderRadius?: TBorderRadiusSizes;
  sizeC?: TComponentSizes;
};

export type TSideBarWithAllAttrs = TSideBar & TFancyBox;
