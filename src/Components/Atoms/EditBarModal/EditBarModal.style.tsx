import { styled, css } from 'styled-components';

import { boxShadow } from '../../design/designFunctions/shadows/shadows';
import { TTheme } from '@/interface/TTheme';

//this calculates the spacing from left and right or nothing
const calcBarWidthandSpacing = (width?: string, spacingLeftRight?: string) => {
  if (width) {
    if (spacingLeftRight) {
      return css`
        width: calc(${width} - ${spacingLeftRight});
      `;
    } else {
      return css`
        width: ${width};
      `;
    }
  } else {
    if (spacingLeftRight) {
      return css`
        width: calc(100% - ${spacingLeftRight});
      `;
    } else {
      return css`
        width: 100%;
      `;
    }
  }
};

interface IWrapper {
  $width?: string;
  $secondBar?: boolean;
  $spacingLeftRight?: string;
}
export const Wrapper = styled.div<IWrapper & { theme: TTheme }>`
  box-sizing: border-box;
  position: relative;
  padding: ${({ theme }) => theme.spacing.md};
  z-index: 99;
  ${({ $width, $spacingLeftRight }) => calcBarWidthandSpacing($width, $spacingLeftRight)};
  background-color: ${({ theme }) => theme.colors.primary[1]};
  border-radius: 12px 12px 0px 0px;
  ${boxShadow.sm}
`;

export const WrapperContent = styled.div<{ theme: TTheme }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;
