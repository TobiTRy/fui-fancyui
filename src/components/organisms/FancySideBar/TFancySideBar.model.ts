import { TSideBarWithAllAttrs } from '@/components/molecules/SideBar';
import { TTextAlignLR } from '@/types/TTextAlignLR';
import { ReactNode } from 'react';

export type TFancySideBar = {
  slotTop?: ReactNode;
  slotBottom?: ReactNode;
  slotContent: ReactNode[];
  align?: TTextAlignLR;
  wichItemIsActive?: number;
} & Omit<TSideBarWithAllAttrs, 'children'>;
