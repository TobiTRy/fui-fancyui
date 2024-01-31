import { CSSProp, styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TTextAlignLC } from '@/types/TTextAlignLC';

export interface IRawInput {
  $align?: TTextAlignLC;
  theme?: TTheme;
  $externalStyle?: CSSProp;
}
const RawInput = styled.input<IRawInput>`
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary[0]};
  text-align: ${({ $align }) => ($align !== 'center' ? 'left' : 'center')};
  border: none;
  outline: none;
  font-sizec: ${({ theme }) => theme.fontSizes.interactiveMd.fontSize};
  padding: 0;
  ${({ $externalStyle }) => $externalStyle};
`;

export default RawInput;
