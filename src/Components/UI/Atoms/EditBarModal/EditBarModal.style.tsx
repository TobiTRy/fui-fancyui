import { styled, css } from 'styled-components';
import { spacingPx, uiColors } from '../../Design/design';
import { boxShadow } from '../../Design/shadows';

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
export const Wrapper = styled.div<IWrapper>`
  box-sizing: border-box;
  position: relative;
  padding: ${spacingPx.md};
  z-index: 99;
  ${({ $width, $spacingLeftRight }) => calcBarWidthandSpacing($width, $spacingLeftRight)};
  background-color: ${uiColors.primary.dark};
  border-radius: 12px 12px 0px 0px;
  ${boxShadow.md}
`;

export const WrapperContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacingPx.md};
`;
