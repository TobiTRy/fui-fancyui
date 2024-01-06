import { TColorState, TColorStateOutput } from '@/design/designFunctions/calcColorState/TcalcColorState.model';

// Define a function to calculate the color state based on the input props
const calcColorState = ({ type, isActive, systemMessage, value, placeholder }: TColorState): TColorStateOutput => {
  if (systemMessage) return systemMessage;
  if (isActive) return 'active';
  if (value && type !== 'item') return 'active';
  if (placeholder) return 'default';
  return 'default';
};

export default calcColorState;
