import { styled } from "styled-components";
import { IRange } from "./DateNumberAtom";
import { borderRadius, uiColors } from "../../Design/design";
import { disabledStyle } from "../../HelperFunctions/designFunctions/disableStyle";



// --------------------------------------------------------------------------- //
// ----------------- The Style for one Day with diferent sates --------------- //
// --------------------------------------------------------------------------- //
interface IStyledDay {
	$range?: IRange;
	$isCurrentDay?: boolean;
	$selected?: boolean;
}
export const StyledDay = styled.button<IStyledDay>`
  cursor: pointer;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: ${borderRadius.complete};
  color: ${({$isCurrentDay}) => $isCurrentDay ? uiColors.accent[0] : uiColors.secondary[0] };
  border: ${({$selected}) => $selected ? `1px solid ${uiColors.accent[0]}` : `none`};
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

  &:hover {
    border: 1px solid ${uiColors.accent[0]};
  }

  &:active {
    border: 1px solid ${uiColors.accent[0]};
  }

  ${({$range}) => $range?.start && `
    border-radius: 40% 5px 5px 40%;
    background-image: linear-gradient(to right, ${uiColors.accent[0]}, transparent);
    color: white;
  `}

  ${({$range}) => $range?.end && `
    border-radius: 5px 40% 40% 5px;
    background-image: linear-gradient(to left, ${uiColors.accent[0]}, transparent);
    color: white;
  `}

  ${({$range}) => $range?.inRange && `
    background-color: ${uiColors.accent[0]};
    color: white;
  `}

  &:disabled {
    ${disabledStyle}
  }
`;