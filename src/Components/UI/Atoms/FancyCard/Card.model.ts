import { IRoundedEdges } from '../../HelperFunctions/designFunctions/edgeCaluculation';
import { spacingPx } from '../../Design/design';
import { borderRadius } from '../../Design/design';
import { TthemeColorGroup } from '../../Design/color/designColor';



type IScaling = '100%' | 'auto' | string;
// the raw styling props for the card
export interface StyledCardProps {
  height?: IScaling;
  width?: IScaling;
  layer?: number;
  shadow?: boolean;
  backgroundColor?: string | TthemeColorGroup; 
  radius?: keyof typeof borderRadius;
  roundedEdges?: IRoundedEdges;
  padding?: keyof typeof spacingPx | false;
}
