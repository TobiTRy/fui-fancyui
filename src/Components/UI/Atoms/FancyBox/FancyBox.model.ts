import { CSSProp } from 'styled-components';
import { TLayer } from '@/Components/UI/Interface/TLayer';
import { TUiColors } from '@/Components/UI/Interface/TUiColors';

type HTMLDivElementProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>;
interface IFancyBox {
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TUiColors;
  children?: React.ReactNode;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
}

export type IFancyBoxProps = IFancyBox & HTMLDivElementProps;
