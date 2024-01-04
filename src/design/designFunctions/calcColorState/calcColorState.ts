import { TColorState, TColorStateOutput } from '@/design/designFunctions/calcColorState/TcalcColorState.model';

// Define a function to calculate the color state based on the input props
const calcColorState = ({ type, isActive, errorMessage, value, placeholder }: TColorState): TColorStateOutput => {
  if (errorMessage) return 'error';
  if (isActive) return 'active';
  if (value && type !== 'item') return 'active';
  if (placeholder) return 'default';
  return 'default';
};

export default calcColorState;
