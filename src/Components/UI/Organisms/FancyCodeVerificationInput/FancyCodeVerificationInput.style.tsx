import { styled, css } from 'styled-components';

import { fontSize, spacingPx } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';

export const WarpperComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${spacingPx.sm};
`;

export const Message = styled.div<{ $isError?: boolean; theme: TUiColorsType }>`
  color: ${({ theme }) => theme.secondary[0]};
  font-size: ${fontSize.sm};
  max-height: 0;
  visibility: hidden;
  overflow: hidden;
  opacity: 0;

  ${({ $isError, theme }) =>
    $isError &&
    css`
      color: ${theme.error[0]};
      max-height: 100px;
      visibility: visible;
      opacity: 1;
    `}

  transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
