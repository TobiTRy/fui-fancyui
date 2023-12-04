import { CSSProp } from 'styled-components';

import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';
import { TThemeTypesNotTransparent } from '@/interface/TThemeTypesNotTransparent';
import { sizes } from '@/components/molecules/FancyContent/utils/sizeSettings';

export interface IChipProps {
  size?: keyof typeof sizes;
  outlined?: boolean;
  themeType?: TThemeTypes;
  textColor?: TThemeTypesNotTransparent;
  layer?: TLayer;
  textLayer?: TLayer;
  isActive?: boolean;
  onClick?: () => void;
  externalStyle?: CSSProp;
  children?: React.ReactNode;
}
