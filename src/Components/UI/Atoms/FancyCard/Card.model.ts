import { IRoundedEdges } from '../../../Design/designFunctions/edgeCaluculation';
import { TLayer } from '@/Components/UI/Interface/TLayer';
import { TBorderRadiusSizes } from '@/Components/UI/Interface/TBorderRadius';
import { TThemeTypes } from '@/Components/UI/Interface/TUiColors';
import { TSpacings } from '@/Components/UI/Interface/TSpacings';

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
