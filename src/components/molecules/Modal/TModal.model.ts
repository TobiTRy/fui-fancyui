import { TSimpleDialog } from '@/components/atoms/SimpleDialog';

export type TModal = {
  id?: string;
  onClose?: (id: string) => void;
  isCloseable?: boolean;
  backDrop?: boolean;
} & TSimpleDialog;

export type TModalWithHTMLAttributes = TModal & React.HTMLAttributes<HTMLDivElement>;
