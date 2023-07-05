import styled  from 'styled-components'
import { colorPalet, fontSize, spacing } from '../Design/design'


export interface IRawInput {
  $align?: 'left' | 'center';
}

const RawInput = styled.input<IRawInput>`
  font-weight: 500;
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
  padding: 0px 0px ${spacing.xs + 2 + 'px'};
`;

export default RawInput;