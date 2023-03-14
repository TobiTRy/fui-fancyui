export interface IFancyDropDownSelect {
  icon?: JSX.Element;
  label?: string;
  labelAlign?: 'left' | 'center';
  inputTextAlign?: 'left' | 'center';
  selected?: string;
  options?: string[];
  onChange?: () => void;
}
