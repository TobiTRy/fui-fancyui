import { TArrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

export type TSpacingContainer = {
  padding?: TArrayToCssValues;
  margin?: TArrayToCssValues;
};

export type TPaddingContainerFullProps = TSpacingContainer & React.HTMLAttributes<HTMLDivElement>;
