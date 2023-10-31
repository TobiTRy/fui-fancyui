import { CSSProp } from "styled-components";
import { TLayer } from "../../Design/color/generateColorSteps";
import { TUiColorsType } from "../../Design/color/designColor";


type HTMLDivElementProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>;
interface IFancyBox {
  outlined?: boolean;
  layer?: TLayer;
  themeType?: keyof TUiColorsType;
  children?: React.ReactNode;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
}

export type IFancyBoxProps = IFancyBox & HTMLDivElementProps;