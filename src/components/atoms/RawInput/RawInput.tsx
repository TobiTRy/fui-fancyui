import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TTextAlignLC } from '@/types/TTextAlignLC';

export interface IRawInput {
  $align?: TTextAlignLC;
  theme?: TTheme;
}
const RawInput = styled.input<IRawInput>`
  font-weight: 500;
  width: 100%;
  appearance: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary[0]};
  text-align: ${({ $align }) => ($align !== 'center' ? 'left' : 'center')};
  border: none;
  outline: none;
  box-shadow: none;
  font-size: ${({ theme }) => theme.fontSizes.desktop.textElements.input};
  padding: 0;
`;

export default RawInput;
