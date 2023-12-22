import { IRoundedEdges } from '@/design/designFunctions/edgeCalculation/edgeCalculation';
import { TLayer } from '@/interface/TLayer';
import { TBorderRadiusSizes } from '@/interface/TBorderRadiusSizes';
import { TSpacings } from '@/interface/TSpacings';

// the scaling types for the card
type IScaling = '100%' | 'auto' | string;
// the raw styling props for the card
export interface StyledCardProps {
  textLayer?: TLayer;
  height?: IScaling;
  width?: IScaling;
  shadow?: boolean;
  radius?: TBorderRadiusSizes;
  roundedEdges?: IRoundedEdges;
  padding?: TSpacings | false;
}
