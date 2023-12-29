import { ElementType } from 'react';

import { TArrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TValue } from '@/design/designFunctions/arrayToCssValues/TArrayValues.model';

export type TSpacingContainer = {
  padding?: TArrayToCssValues | TValue;
  margin?: TArrayToCssValues | TValue;
  as?: React.ElementType;
};

export type TPaddingContainerHTMLProps<T extends ElementType> = {
  as?: React.ElementType;
} & Omit<React.HTMLAttributes<T>, 'style'>;

export type TPaddingContainerFullProps<T extends ElementType> = TSpacingContainer & TPaddingContainerHTMLProps<T>;
