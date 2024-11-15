import { TSimpleDialog } from '@/components/atoms/SimpleDialog';

export type TModal = {
  onClose?: () => void;
  isCloseable?: boolean;
  backDrop?: boolean;
} & TSimpleDialog;

export type TModalHTMLAttributes = React.HTMLAttributes<HTMLDivElement>;

export type TModalWithHTMLAttributes = TModal & React.HTMLAttributes<HTMLDivElement>;
