import { IRoundedEdges } from '../../design/designFunctions/edgeCaluculation';
import { TLayer } from '@/components/core/interface/TLayer';
import { TBorderRadiusSizes } from '@/components/core/interface/TBorderRadius';
import { TThemeTypes } from '@/components/core/interface/TUiColors';
import { TSpacings } from '@/components/core/interface/TSpacings';

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
