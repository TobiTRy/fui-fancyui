import { styled } from 'styled-components';
import { borderRadius, spacingPx } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';

export const DatePickerContainer = styled.div<{ theme: TUiColorsType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primary[2]};
  border-radius: ${borderRadius.xl};
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const WrapperYearSelector = styled.div`
  width: 100%;
  padding: ${spacingPx.md} ${spacingPx.md} ${spacingPx.md};
  box-sizing: border-box;
`;

export const WrapperWeekdays = styled.div<{ theme: TUiColorsType }>`
  width: 100%;
  border-bottom: solid 1px ${({ theme }) => theme.secondary[1]};
  padding-bottom: ${spacingPx.xxs};
`;
