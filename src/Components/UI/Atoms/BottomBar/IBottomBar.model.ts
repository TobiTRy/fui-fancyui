import { TUiColorsType } from "../../Design/color/designColor";
import { TLayer } from "../../Design/color/generateColorSteps";
import { borderRadius } from "../../Design/design";

interface IBottomBar {
  children?: React.ReactNode;
  bottomFixed?: boolean;
  width?: string;
  spacingLeftRight?: string;
  roundedness?: keyof typeof borderRadius;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}

export default IBottomBar;