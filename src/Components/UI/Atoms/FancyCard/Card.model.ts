import { IRoundedEdges } from '../../HelperFunctions/designFunctions/edgeCaluculation';
import { spacingPx } from '../../Design/design';
import { uiColors } from '../../Design/color/designColor';
import { borderRadius } from '../../Design/design';

type IScaling = '100%' | 'auto' | string;
// the raw styling props for the card
export interface StyledCardProps {
  height?: IScaling;
  width?: IScaling;
  backgroundColor?: keyof typeof uiColors.primary;
  radius?: keyof typeof borderRadius;
  roundedEdges?: IRoundedEdges;
  padding?: keyof typeof spacingPx | false;
}
