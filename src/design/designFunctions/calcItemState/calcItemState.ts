import { TColorState, TItemStateOutput } from '@/design/designFunctions/calcItemState';

// Define a function to calculate the color state based on the input props
const calcItemState = ({ type, isActive, systemMessage, value, placeholder }: TColorState): TItemStateOutput => {
  if (systemMessage && type !== 'item') return 'active';
  if (isActive) return 'active';
  if (value && type !== 'item') return 'active';
  if (placeholder) return 'default';
  return 'default';
};

export default calcItemState;
