import { TSpacings } from '@/types/TSpacings';
import { TTheme } from '@/types/TTheme';

import { styled } from 'styled-components';

type TFancyModalHeadLine = {
  $alignCenter?: boolean;
  theme: TTheme;
  $gap?: TSpacings;
};

export const StyledHeadLine = styled.div<TFancyModalHeadLine>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: ${({ theme, $gap }) => ($gap ? theme.spacing[$gap || 'xxs'] : '')};
  align-items: ${({ $alignCenter }) => ($alignCenter ? 'center' : 'flex-start')};

  hr {
    margin-top: ${({ theme }) => theme.spacing.xs};
    width: 100%;
  }
`;
