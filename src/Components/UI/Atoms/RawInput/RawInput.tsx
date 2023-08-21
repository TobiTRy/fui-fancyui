import { styled } from 'styled-components';
import { colorPalet, fontSize } from '../../Design/design';

export type TRawInputAlign = 'left' | 'center';

export interface IRawInput {
  $align?: TRawInputAlign;
}

const RawInput = styled.input<IRawInput>`
  font-weight: 500;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  appearance: none;
  background-color: transparent;
  color: ${colorPalet.white_high};
  text-align: ${({ $align }) => ($align !== 'center' ? 'left' : 'center')};
  border: none;
  outline: none;
  box-shadow: none;
  font-size: ${fontSize.medium};
  padding: 0;
`;

export default RawInput;
