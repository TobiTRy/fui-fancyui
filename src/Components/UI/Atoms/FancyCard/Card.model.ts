import { IBorderRadiusNames } from '../../Design/design'
import { IRoundedEdges } from '../../HelperFunctions/edgeCaluculation';

type IScaling = '100%' | 'auto' | string;
// the raw styling props for the card
export interface StyledCardProps {
  height?: IScaling;
  width?: IScaling;
  radius?: IBorderRadiusNames;
  roundedEdges?: IRoundedEdges;
}
