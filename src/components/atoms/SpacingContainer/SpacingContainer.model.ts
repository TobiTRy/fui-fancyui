import { TArrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TValue } from '@/design/designFunctions/arrayToCssValues/TArrayValues.model';

export type TSpacingContainer = {
  padding?: TArrayToCssValues | TValue;
  margin?: TArrayToCssValues | TValue;
};

export type TPaddingContainerFullProps = TSpacingContainer & React.HTMLAttributes<HTMLDivElement>;
