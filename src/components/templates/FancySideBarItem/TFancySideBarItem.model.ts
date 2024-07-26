import { TFancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { TTypography } from '@/components/atoms/Typography';
import { TSideBarItem } from '@/components/molecules/SideBarItem';

export type TFancySideBarItem = {
  icon: React.ReactNode;
  label: string;
  typographySettings?: Omit<TTypography, 'sizeC'>;
  iconSettings?: Omit<TFancySVGAtom, 'sizeC'>;
} & Omit<TSideBarItem, 'children'>;
