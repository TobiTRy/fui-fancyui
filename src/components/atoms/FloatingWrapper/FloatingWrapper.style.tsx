import { css, styled } from 'styled-components';

export type TFloatingPosition =
  | 'top-center'
  | 'top-left'
  | 'top-right'
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right';

const getPosition = (position: TFloatingPosition) => {
  switch (position) {
    case 'top-center':
      return css`
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      `;
    case 'top-left':
      return css`
        top: 0;
        left: 0;
      `;
    case 'top-right':
      return css`
        top: 0;
        right: 0;
      `;
    case 'bottom-center':
      return css`
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      `;
    case 'bottom-left':
      return css`
        bottom: 0;
        left: 0;
      `;
    case 'bottom-right':
      return css`
        bottom: 0;
        right: 0;
      `;
    default:
      return css`
        top: 0;
        left: 0;
      `;
  }
};

export const StyledFloatingWrapper = styled.div<{ $position: TFloatingPosition }>`
  position: fixed;
  ${({ $position }) => getPosition($position)}
`;
