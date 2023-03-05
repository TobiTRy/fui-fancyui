export default interface IFancyInput {
    label?: string;
    required?: boolean;
    align?: 'left' | 'center';
    textColor?: 'bright' | 'dark';
    type?: 'number' | 'email' | 'text' | 'password';
    calculatedType?: 'number' | 'email' | 'text' | 'password';
    defaultValue?: 'string' | 'number';
    onChange?: () => void;
  }
  