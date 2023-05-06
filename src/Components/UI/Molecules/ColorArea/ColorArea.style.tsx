import styled from 'styled-components';
import { borderRadius } from '../../Design/design';

export const WrapperColorArea = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
`;




const dynamicGradient = ({hue}:{hue: number}) => ({
  style: {
    backgroundColor: `hsl(${hue}, 100%, 50%)`,
  },
})
export const ColorAreaContainer = styled.div.attrs(dynamicGradient)<{ hue: number }>`
  overflow: hidden;
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  cursor: crosshair;
  user-select: none;
  border-radius: ${borderRadius.small};
`;

const dynamicGradientLightness = ({hue}:{hue: number}) => ({
  style: {
    backgroundImage: `linear-gradient(to right, hsl(${hue}, 100%, 100%), transparent)`,
  },
})
export const LightnessGradient = styled.div.attrs(dynamicGradientLightness)<{ hue: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #000, transparent);
`;


const dynamicGradientSaturation = ({hue}:{hue: number}) => ({
  style: {
    backgroundImage: `linear-gradient(to bottom, transparent, hsl(${hue}, 0%, 0%))`,
  },
})
export const SaturationGradient = styled.div.attrs(dynamicGradientSaturation)<{ hue: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  
`;

export const Marker = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  pointer-events: none;
`;

export const WrapperMarker = styled.div`
  position: absolute;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  height: 12px;
  aspect-ratio: 1/1;
  border-radius: ${borderRadius.small};
`;
