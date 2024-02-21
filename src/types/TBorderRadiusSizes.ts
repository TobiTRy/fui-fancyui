import { borderRadius } from '../design/theme/designSizes';

export type TBorderRadiusSizes = keyof typeof borderRadius;

type TBorderRadiusVariation = TBorderRadiusSizes | string | number;

export type TBorderRadiusSizesArray = [
  TBorderRadiusVariation?,
  TBorderRadiusSizes?,
  TBorderRadiusSizes?,
  TBorderRadiusSizes?,
];
