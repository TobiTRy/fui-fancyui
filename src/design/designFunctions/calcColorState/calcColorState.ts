interface IColorState {
  type: 'item' | 'text';
  isActive?: boolean;
  errorMessage?: string;
  value?: string | number | readonly string[] | undefined;
  placeholder?: string;
}

// Define a function to calculate the color state based on the input props
const calcColorState = ({ type, isActive, errorMessage, value, placeholder }: IColorState) => {
  if (errorMessage) return 'error';
  if (isActive) return 'active';
  if (value && type !== 'item') return 'active';
  if (placeholder) return 'default';
  return 'default';
};

export default calcColorState;
