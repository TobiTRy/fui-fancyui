import { ElementType } from 'react';

import { TArrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TValue } from '@/design/designFunctions/arrayToCssValues/TArrayValues.model';

export type TSpacingsContainer = {
  padding?: TArrayToCssValues | TValue;
  margin?: TArrayToCssValues | TValue;
  as?: React.ElementType;
};

export type TSpacingsContainerHTMLProps<T extends ElementType> = {
  as?: React.ElementType;
} & Omit<React.HTMLAttributes<T>, 'style'>;

export type TPaddingContainerFullProps<T extends ElementType> = TSpacingsContainer & TSpacingsContainerHTMLProps<T>;
