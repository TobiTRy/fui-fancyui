import { styled } from 'styled-components';

import { TTheme } from '@/Components/UI/Interface/TTheme';

//the wrapper of the color area (it wraps the color area and the color indicator)
export const WrapperColorArea = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
`;

// the color area container (it wraps all gradients and the marker)
export const ColorAreaContainer = styled.div<{ theme: TTheme }>`
  overflow: hidden;
  position: relative;
  height: 100%;
  cursor: crosshair;
  user-select: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

// ---------- The ColorArea Gradients ------- //
interface IColorGradient {
  $hue: number;
  theme: TTheme;
}

//the color gradient it shows the current color via the hue
export const CurrentColorArea = styled.div.attrs<IColorGradient>(({ $hue }) => ({
  style: {
    background: `hsl(${$hue}, 100%, 50%)`,
  },
}))<IColorGradient>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

export const LightnessGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, hsl(0, 100%, 100%), transparent);
`;

export const SaturationGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent, hsl(0, 0%, 0%));
`;

// ---------- The Marker ------- //
export const WrapperMarker = styled.div<{ theme: TTheme }>`
  position: absolute;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

export const Marker = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 12px;
  height: 12px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  transform: translate(-50%, -50%);
`;
