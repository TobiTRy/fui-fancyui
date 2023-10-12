import { TUiColorsType } from "../../Design/color/designColor";
import { TLayer } from "../../Design/color/generateColorSteps";

export interface ISwipeUpModal {
  isOpen?: boolean;
  children?: React.ReactNode;
  isCloseAble?: boolean; // if a error occurs and the modal should be closeable
  isScalable?: boolean; // if the modal should be static or scalable
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  onClose?: () => void;
}
