import { TLayer } from "../../Design/color/generateColorSteps";

type IToastMessage = {
  id: number;
  title: string;
  message: string;
  time?: number;
  type: 'success' | 'warning' | 'error' | 'info';
  layer: TLayer;
};

export default IToastMessage;