/* eslint-disable @typescript-eslint/no-unused-vars */
import { css, styled } from 'styled-components';
import { FancyBox } from '@/components/atoms/FancyBox';
import { sizes } from './sizeSettings';
import { TTheme } from '@/interface/TTheme';
import { TBorderRadiusSizes } from '@/interface/TBorderRadiusSizes';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker.model';
import { TPill } from '@/components/atoms/Pill/Pill';

type StyledPillProps = IStyledPrefixAndPicker<TPill>;
export const StyledPill = styled(FancyBox)<StyledPillProps & { theme: TTheme }>`
  border-radius: ${({ theme, $borderRadius }) => theme.borderRadius[$borderRadius || 'complete']};
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.accent[0]};
  }

  ${({ $isActive, theme }) => {
    if ($isActive) {
      return css`
        box-shadow: 0 0 0 1px ${theme.colors.accent[0]};
      `;
    }
  }}
`;
