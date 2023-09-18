import { styled, css } from 'styled-components';
import { borderRadius, spacingPx } from '../../Design/design';
import { boxShadow } from '../../Design/shadows';
import { TUiColorsType } from '../../Design/color/designColor';

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

export const BottomCenterdFixed = css`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`;

//the main bar for alignment
interface IBottomBarWrapper {
  $bottomFixed?: boolean;
  $width?: string;
  $spacingLeftRight?: string;
  $roundedness?: keyof typeof borderRadius;
}
export const Wrapper = styled.div<IBottomBarWrapper & { theme: TUiColorsType }>`
  ${({ $bottomFixed }) => ($bottomFixed ? BottomCenterdFixed : null)}
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;
  ${({ $width, $spacingLeftRight }) => calcBarWidthandSpacing($width, $spacingLeftRight)};
  background-color: ${({ theme }) => theme.primary[1]};
  border-radius: ${({ $roundedness }) => ($roundedness ? `${borderRadius[$roundedness]} ${borderRadius[$roundedness]} 0px 0px` : '')};
  padding: ${spacingPx.sm} ${spacingPx.sm} 0 ${spacingPx.sm};
  ${boxShadow.sm}
`;

//the bar for the items and the style
export const Bar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const ScollAbleBar = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

//is needed to make the items not shrink
export const ItemWrapper = styled.div<{ $secondBar?: boolean }>`
  flex: 1 0 64px;
  ${({ $secondBar }) =>
    $secondBar
      ? css`
          padding-bottom: ${0 + 'px'};
          margin-bottom: 4px;
        `
      : null};
`;
