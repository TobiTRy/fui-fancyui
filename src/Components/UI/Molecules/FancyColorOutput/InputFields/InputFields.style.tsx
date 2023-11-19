import { styled } from 'styled-components';

import { spacingPx } from '../../../Design/designSizes';
import { TTheme } from '@/Components/UI/Interface/TTheme';

export const WrapperInputs = styled.div`
  display: flex;
  width: 100%;
  gap: ${({theme}) => theme.spacing.sm};
`;

export const ContainerInputs = styled.div<{ theme: TTheme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${({theme}) => theme.spacing.xs};

  p {
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondary[0]};
  }
`;
