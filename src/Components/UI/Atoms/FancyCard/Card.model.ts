import { IRoundedEdges } from '../../HelperFunctions/designFunctions/edgeCaluculation';
import { spacingPx } from '../../Design/designSizes';
import { borderRadius } from '../../Design/designSizes';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';

// the scaling types for the card
type IScaling = '100%' | 'auto' | string;
// the raw styling props for the card
export interface StyledCardProps {
  themeType?: keyof TUiColorsType;  
  textLayer?: TLayer;
  height?: IScaling;
  width?: IScaling;
  layer?: TLayer;
  shadow?: boolean;
  radius?: keyof typeof borderRadius;
  roundedEdges?: IRoundedEdges;
  padding?: keyof typeof spacingPx | false;
}
