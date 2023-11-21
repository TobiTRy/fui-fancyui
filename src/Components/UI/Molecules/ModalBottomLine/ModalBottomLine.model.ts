export type IBottomLineButton = {
  title: string;
  onClick: () => void;
  secondaryButton?: boolean;
  disabled?: boolean;
};

interface IModalBottomLine {
  buttons?: IBottomLineButton[];
  component?: React.ReactNode;
}

export default IModalBottomLine;
