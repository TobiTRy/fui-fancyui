export default interface IFancyDropDownSelect {
  icon?: JSX.Element;
  label?: string;
  labelAlign?: 'left' | 'center';
  inputTextAlign?: 'left' | 'center';
  selected?: string;
  options?: string[];
  disabled?: boolean;
  onChange?: () => void;
}
