import { IRoundedEdges } from '../../HelperFunctions/designFunctions/edgeCaluculation';
import { spacingPx } from '../../Design/design';
import { borderRadius } from '../../Design/design';
import { TUiColorsType, TthemeColorGroup } from '../../Design/color/designColor';



type IScaling = '100%' | 'auto' | string;
// the raw styling props for the card
export interface StyledCardProps {
  themeType?: keyof TUiColorsType;  
  variant?: number;
  customColor?: string | TthemeColorGroup;
  customTextColor?: string | TthemeColorGroup;
  height?: IScaling;
  width?: IScaling;
  layer?: number;
  shadow?: boolean;
  radius?: keyof typeof borderRadius;
  roundedEdges?: IRoundedEdges;
  padding?: keyof typeof spacingPx | false;
}
