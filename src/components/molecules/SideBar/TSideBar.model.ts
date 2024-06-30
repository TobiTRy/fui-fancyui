import { TFancyBox } from '@/components/atoms/FancyBox';
import { ReactNode } from 'react';

export type TSideBar = {
  isOpen?: boolean;
  openWidth?: string;
  children: ReactNode;
};

export type TSideBarWithAllAttrs = TSideBar & TFancyBox;
