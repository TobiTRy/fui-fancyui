import { css, styled } from 'styled-components';
import { FancyBox } from '@/components/atoms/FancyBox';
import { sizes } from './sizeSettings';
import { TTheme } from '@/interface/TTheme';
import { TBorderRadiusSizes } from '@/interface/TBorderRadiusSizes';

type TPill = {
  $size?: keyof typeof sizes;
  $borderRadius?: TBorderRadiusSizes;
  $isActive?: boolean;
};
export const StyledPill = styled(FancyBox)<TPill & { theme: TTheme }>`
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
