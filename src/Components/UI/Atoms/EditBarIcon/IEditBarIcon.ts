export interface IEditBarIconButton {
  id?: string;
  icon: JSX.Element;
  label: string;
  color?: string;
  active?: boolean;
  disabled?: boolean;
  handler?: () => void;
}