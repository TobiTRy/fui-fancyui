import { TComponentSizes } from '@/interface/TComponentSizes';
import { IRoundedEdges } from '@/design/designFunctions/edgeCalculation/edgeCalculation';

// the raw styling props for the card
export interface StyledCardProps {
  shadow?: boolean;
  roundedEdges?: IRoundedEdges;
  size?: TComponentSizes;
  padding?: boolean;
}
