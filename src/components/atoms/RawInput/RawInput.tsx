import { styled } from 'styled-components';

import { fontSize } from '@/design/theme/designSizes';
import { TTheme } from '@/interface/TTheme';
import { TTextAlignLC } from '@/interface/TTextAlignLC';

export interface IRawInput {
  $align?: TTextAlignLC;
  theme?: TTheme;
}
const RawInput = styled.input<IRawInput>`
  font-weight: 500;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  appearance: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary[0]};
  text-align: ${({ $align }) => ($align !== 'center' ? 'left' : 'center')};
  border: none;
  outline: none;
  box-shadow: none;
  font-size: ${fontSize.md};
  padding: 0;
`;

export default RawInput;
