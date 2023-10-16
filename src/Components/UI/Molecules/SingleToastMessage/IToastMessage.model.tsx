import { TSystemMessageProps } from "../../Design/Interfaces/TSystemMessageProps";
import { TLayer } from "../../Design/color/generateColorSteps";

type IToastMessage = {
  id: number;
  title: string;
  message: string;
  time?: number;
  themeType: TSystemMessageProps;
  layer?: TLayer;
};

export default IToastMessage;