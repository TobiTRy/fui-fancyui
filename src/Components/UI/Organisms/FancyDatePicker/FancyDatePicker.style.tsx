import { styled } from 'styled-components';

import { borderRadius, spacingPx } from '../../Design/designSizes';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import getColorsForComponent, { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import { TTheme } from '@/Components/UI/Design/color/themeStore';

export const DatePickerContainer = styled.div<{ theme: TTheme; $themeType?: keyof TUiColorsType; $layer?: TLayer }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme, $themeType = 'primary', $layer = 1 }) => getColorsForComponent({ theme, $themeType, $layer })};
  border-radius: ${borderRadius.xl};
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const WrapperYearSelector = styled.div`
  width: 100%;
  padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.md};
  box-sizing: border-box;
`;

export const WrapperWeekdays = styled.div<{ theme: TTheme, $themeType?: keyof TUiColorsType  }>`
  width: 100%;
  border-bottom: solid 1px ${({ theme, $themeType = 'secondary'  }) => getBackgroundColor({ theme, $themeType })};
  padding-bottom: ${({theme}) => theme.spacing.xxs};
`;
