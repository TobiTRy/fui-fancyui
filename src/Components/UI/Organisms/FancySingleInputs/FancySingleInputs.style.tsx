import { styled, css } from 'styled-components';
import IStatus from '../../Design/Interfaces/IStatus';
import { colorPalet, fontSize, spacingPx } from '../../Design/design';
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

export const Message = styled.div<{ $status?: boolean; theme: TUiColorsType }>`
  color: ${({ theme }) => theme.secondary[0]};
  font-size: ${fontSize.sm};
  max-height: 0;
  visibility: hidden;
  overflow: hidden;
  opacity: 0;

  transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out, visibility 0.3s ease-in-out;

  ${({ $status }) =>
    $status &&
    css`
      max-height: 100px;
      visibility: visible;
      opacity: 1;
    `}
`;

export const Container = styled.div<{ $status?: Omit<IStatus, 'isLoading'> }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Message} {
    ${({ $status }) =>
      $status?.isError
        ? css`
            color: ${colorPalet.red_light};
          `
        : $status?.isSucceed
        ? css`
            color: ${colorPalet.green_light};
          `
        : ''};
  }
`;
