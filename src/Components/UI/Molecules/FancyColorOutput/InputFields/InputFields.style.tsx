import { styled } from 'styled-components';
import { spacingPx } from '../../../Design/designSizes';
import { TUiColorsType } from '../../../Design/color/designColor';

export const WrapperInputs = styled.div`
  display: flex;
  width: 100%;
  gap: ${spacingPx.sm};
`;

export const ContainerInputs = styled.div<{ theme: TUiColorsType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${spacingPx.xs};

  p {
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondary[0]};
  }
`;
