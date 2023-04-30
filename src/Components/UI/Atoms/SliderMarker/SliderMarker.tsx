
import styled from 'styled-components';
import { borderRadius } from '../../Design/design';


export const WrapperMarker = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 2px;
  bottom: 2px;
  margin-left: 0;
  margin-right: 0;
  width: 5px;
  transform: translate(-2.5px);
  z-index: 2;
`;

const Marker = styled.div`
  box-sizing: border-box;
  position: relative;
  border: 1px solid white;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0 1px rgba(39, 39, 39, 0.5);
  border-radius: ${borderRadius.small};
`;

interface ISliderMarker {
  position: string;
  children?: React.ReactNode;
}

export default function SliderMarker({position, children}: ISliderMarker) {
  return (
    <WrapperMarker style={{ left: position  }}>
      <Marker>
        {children && children}
      </Marker>
    </WrapperMarker>
  )
}
