import { IRoundedEdges } from '../../HelperFunctions/designFunctions/edgeCaluculation';
import { spacingPx } from '../../Design/design';
import { borderRadius } from '../../Design/design';
import themeStore from '../../Design/color/themeStore';

const theme = themeStore.getState().theme;

type IScaling = '100%' | 'auto' | string;
// the raw styling props for the card
export interface StyledCardProps {
  height?: IScaling;
  width?: IScaling;
  layer?: number;
  shadow?: boolean;
  backgroundColor?: keyof typeof theme.primary;
  radius?: keyof typeof borderRadius;
  roundedEdges?: IRoundedEdges;
  padding?: keyof typeof spacingPx | false;
}
