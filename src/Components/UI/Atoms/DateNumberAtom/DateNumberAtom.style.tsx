import { css, styled } from "styled-components";
import { IRange } from "./DateNumberAtom";
import { borderRadius, } from "../../Design/design";
import { disabledStyle } from "../../HelperFunctions/designFunctions/disableStyle";
import { TUiColorsType } from "../../Design/color/designColor";



// --------------------------------------------------------------------------- //
// ----------------- The Style for one Day with diferent sates --------------- //
// --------------------------------------------------------------------------- //
interface IStyledDay {
	$range?: IRange;
	$isCurrentDay?: boolean;
	$selected?: boolean;
}
export const StyledDay = styled.button<IStyledDay & {theme: TUiColorsType}>`
  cursor: pointer;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: ${borderRadius.complete};
  color: ${({$isCurrentDay, theme}) => $isCurrentDay ? theme.accent[0] : theme.secondary[0] };
  border: ${({$selected, theme}) => $selected ? `1px solid ${theme.accent[0]}` : `none`};
  background-color: transparent;
  padding: 0;
  width: 80%;
  max-width: 40px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  &:hover, &:active {
    border: 1px solid ${({theme}) => theme.accent[0]};
  }


  ${({$range, theme}) => $range?.start && css`
    border-radius: 40% 5px 5px 40%;
    background-image: linear-gradient(to right, ${theme.accent[0]}, transparent);
    color: white;
  `}

  ${({$range, theme}) => $range?.end && `
    border-radius: 5px 40% 40% 5px;
    background-image: linear-gradient(to left, ${theme.accent[0]}, transparent);
    color: white;
  `}

  ${({$range, theme}) => $range?.inRange && `
    background-color: ${theme.accent[0]};
    color: white;
  `}

  &:disabled {
    ${disabledStyle}
  }
`;