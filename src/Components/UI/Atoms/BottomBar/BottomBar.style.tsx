import styled, { css } from "styled-components";
import { spacing, spacingPx, uiColors } from "../../Design/design";


export const BottomCenterdFixed = css`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`;

//the main bar for alignment
export const Wrapper = styled.div<{bottomFixed?: boolean, width?: string, secondBar?: boolean}>`
  ${({bottomFixed}) => (bottomFixed ? BottomCenterdFixed : null)}

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;
  width: ${({width}) => width ? width : '100%'};
  background-color: ${uiColors.primary.hover};
  border-radius: 12px 12px 0px 0px;
  box-shadow: 0 0 ${({secondBar}) => secondBar ? '24px' : '12px' }  black;
`;

//the bar for the items and the style
export const Bar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  padding: 8px 8px 0 8px;
  width: 100%;
  padding: ${spacingPx.sm} ${spacingPx.sm} 0 ${spacingPx.sm};
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
export const ItemWrapper = styled.div<{secondBar?: boolean}>`
  flex: 1 0 64px;
  ${({secondBar}) => secondBar ? css`padding-bottom: ${0  + 'px'}; margin-bottom: 4px` : null};
`;