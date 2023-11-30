import { CSSProp } from 'styled-components';
import { TLayer } from '@/components/core/interface/TLayer';
import { TThemeTypes } from '@/components/core/interface/TUiColors';

type HTMLDivElementProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>;
interface IFancyBox {
  as?: keyof JSX.IntrinsicElements;
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TThemeTypes;
  children?: React.ReactNode;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
}

export type IFancyBoxProps = IFancyBox & HTMLDivElementProps;
