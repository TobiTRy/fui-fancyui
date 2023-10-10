import { styled } from 'styled-components';
import { fontSize } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';

export type TRawInputAlign = 'left' | 'center';

export interface IRawInput {
  $align?: TRawInputAlign;
  theme?: TUiColorsType;
}
const RawInput = styled.input<IRawInput>`
  font-weight: 500;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  appearance: none;
  background-color: transparent;
  color: ${({ theme }) => theme.secondary[0]};
  text-align: ${({ $align }) => ($align !== 'center' ? 'left' : 'center')};
  border: none;
  outline: none;
  box-shadow: none;
  font-size: ${fontSize.md};
  padding: 0;
`;

export default RawInput;
