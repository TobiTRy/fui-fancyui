import { TSystemMessageProps } from "../../Interface/TSystemMessageProps";
import { TLayer } from "@/Components/UI/Interface/TLayer";

type IToastMessage = {
  id: number;
  title: string;
  message: string;
  time?: number;
  themeType: TSystemMessageProps;
  layer?: TLayer;
};

export default IToastMessage;