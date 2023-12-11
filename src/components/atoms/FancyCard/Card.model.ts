import { IRoundedEdges } from '@/design/designFunctions/edgeCalculation/edgeCalculation';
import { TLayer } from '@/interface/TLayer';
import { TBorderRadiusSizes } from '@/interface/TBorderRadiusSizes';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { TSpacings } from '@/interface/TSpacings';

// the scaling types for the card
type IScaling = '100%' | 'auto' | string;
// the raw styling props for the card
export interface StyledCardProps {
  themeType?: TThemeTypes;
  textLayer?: TLayer;
  height?: IScaling;
  width?: IScaling;
  layer?: TLayer;
  shadow?: boolean;
  radius?: TBorderRadiusSizes;
  roundedEdges?: IRoundedEdges;
  padding?: TSpacings | false;
}
