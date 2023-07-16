import { IInputCreatorActiveHandler, IInputCreatorHandler } from "../../Molecules/InputCreator/InputCreator";

export default interface IFancyDropDownSelect {
  values?: string[];
  value?: string;
  disabled?: boolean;
  name?: string;
  align?: 'left' | 'center';
  handler?: IInputCreatorHandler;
  activeHandler?: IInputCreatorActiveHandler;
  icon?: JSX.Element;
  label?: string;
}