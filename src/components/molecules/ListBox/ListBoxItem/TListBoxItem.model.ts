import { CSSProp } from 'styled-components';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TLayer } from '@/types/TLayer';
import { TUiColorTypes } from '@/types/TUiColorTypes';

export type TListBoxItemProps = {
  children?: React.ReactNode;
  externalStyle?: CSSProp;
  sizeC?: TComponentSizes;
  themeType?: TUiColorTypes;
  layer?: TLayer;
  hoverLayer?: TLayer;
};
