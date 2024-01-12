import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { InputLabel } from '@/components/atoms/InputLabel/InputLabel';

export const RangeSliderContainer = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  position: relative;
  width: 100%;
`;

export const NumberContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  grid-row: 2 / 3;
  grid-column: 3 / 4;
  margin-left: 10px;
  margin-top: -4px;
`;

//the label inhert the style from the AlignedInputLabel
export const Label = styled(InputLabel)`
  grid-row: 1/2;
  grid-column: 2/3;
`;

export const Icon = styled.div<{ theme: TTheme }>`
  grid-column: 1/2;
  grid-row: 2/3;
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
  margin-right: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
`;
