import { styled } from 'styled-components';

import { TTheme } from '../../Interface/TTheme';
import colorTransparencyCalculator from '../../Design/color/colorTransparencyCalculator';

export const WrapperMarker = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 2px;
  bottom: 2px;
  margin-left: 0;
  margin-right: 0;
  width: 5px;
  z-index: 2;
  transform: translate(-2.5px);
`;

export const Marker = styled.div<{ theme: TTheme }>`
  box-sizing: border-box;
  position: relative;
  border: ${({ theme }) => `solid 1px ${theme.colors.primary[0]} `};
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 1px 1px ${({ theme }) => colorTransparencyCalculator(theme.colors.secondary[0], 0.5)};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;
