import { IInputCreatorActiveHandler, IInputCreatorHandler } from "../InputCreator/InputCreator";

export default interface IFancyDropDownSelect {
  values?: string[] | number[];
  disabled?: boolean;
  align?: 'left' | 'center';
  handler?: IInputCreatorHandler;
  activeHandler?: IInputCreatorActiveHandler;
  icon?: JSX.Element;
  label?: string;
}