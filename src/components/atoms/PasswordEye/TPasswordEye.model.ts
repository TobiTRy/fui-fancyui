import { TFancySVGAtomWithNativeAttrs } from '@/components/atoms/FancySVGAtom';

export type TPasswordEye = {
  isShow?: boolean;
  onClick?: () => void;
  customEyeOpen?: React.ReactNode;
  customEyeCrossed?: React.ReactNode;
} & TPasswordEyeSVGProps;

export type TPasswordEyeSVGProps = Omit<TFancySVGAtomWithNativeAttrs, 'children' | 'isPassive' | 'isActive'>;
