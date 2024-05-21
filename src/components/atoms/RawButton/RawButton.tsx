import { styled } from 'styled-components';

const RawButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex: 1;
  align-items: center;
  color: inherit;
`;

RawButton.displayName = 'RawButton';

export default RawButton;
