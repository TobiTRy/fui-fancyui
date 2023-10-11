import { TUiColorsType } from "../../Design/color/designColor";
import { TLayer } from "../../Design/color/generateColorSteps";
import { ModalStatus } from "../../Interface/ModalStatus";

export interface ISwipeUpModal {
  id?: string;
  status: ModalStatus;
  children?: React.ReactNode;
  isCloseAble?: boolean; // if a error occurs and the modal should be closeable
  isScalable?: boolean; // if the modal should be static or scalable
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  closeHandler?: (id: string) => void;
}
