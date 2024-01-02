import { TArrayToCssValues } from '@/design/designFunctions/arrayToCssValues/TArrayValues.model';
// the raw styling props for the card
export interface StyledCardProps {
  shadow?: boolean;
  roundedEdges?: TArrayToCssValues;
  padding?: TArrayToCssValues;
}
