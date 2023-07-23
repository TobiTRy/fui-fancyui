import { borderRadius } from "../../Design/design";

interface IBottomBar {
  children?: React.ReactNode;
  bottomFixed?: boolean;
  width?: string;
  spacingLeftRight?: string;
  roundedness?: keyof typeof borderRadius;
}

export default IBottomBar;