import { globalSizes } from '@/design/theme/globalSizes';

type KeyOfGlobalSizes = keyof typeof globalSizes;

export type TComponentSizes = Extract<KeyOfGlobalSizes, 'sm' | 'md' | 'lg'>;

export type TComponentSizesMid = Extract<KeyOfGlobalSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

export type TComponentSizesExtended = keyof typeof globalSizes;
