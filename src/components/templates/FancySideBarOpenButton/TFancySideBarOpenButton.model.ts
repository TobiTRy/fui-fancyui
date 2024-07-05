import { TSideBarItem } from '@/components/molecules/SideBarItem';
import { TTextAlignLR } from '@/types/TTextAlignLR';

export type TFancySideBarOpenButton = Omit<TSideBarItem, 'children'> & {
  isOpen?: boolean;
  arrowDirectionClosed?: TTextAlignLR;
};
