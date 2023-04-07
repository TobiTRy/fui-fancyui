export default interface IFancyInput {
  label?: string;
  required?: boolean;
  align?: 'left' | 'center';
  textColor?: 'bright' | 'dark';
  type?: 'number' | 'email' | 'text' | 'password';
  calculatedType?: 'number' | 'email' | 'text' | 'password';
  value?: string | number;
  disabled?: boolean;
  icon?: JSX.Element;
  errorMessage?: string;
  handler?: () => void;
}
