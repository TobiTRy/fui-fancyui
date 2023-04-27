
import styled from 'styled-components';
import { borderRadius } from '../Design/design';

const SliderMarker = styled.div`
  position: absolute;
  top: 50%;
  width: 4px;
  height: 12px;
  background: white;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  transform: translate(-2px ,-50%);
  border-radius: ${borderRadius.small};
`;


export default SliderMarker;
