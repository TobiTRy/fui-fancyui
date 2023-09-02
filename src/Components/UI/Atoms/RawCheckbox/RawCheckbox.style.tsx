import styled, { css } from "styled-components";
import { uiColors } from "../../Design/design";
import { TAlign, TAlignCheckbox } from "./RawCheckbox.model";

const checkboxStyles = css`
  width: 20px;
  height: 20px;
  border-radius: 4px;
`;

export const Wrapper = styled.div<{ $align: TAlign; }>`
  position: relative;
  display: flex;

  justify-content: ${({ $align }) => {
    switch ($align) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      case 'center':
        return 'center';
    }
  }};
`;

export const HidenCheckBox = styled.input`
  margin: 0;
  position: absolute;
  cursor: pointer;
  opacity: 1;
  background-color: transparent;
  z-index: 0;
  appearance: none;
  outline: none;
  ${checkboxStyles}
  margin: 1px;

  &:checked {
    background-color: transparent;
  }

  &:focus-visible {
    box-shadow: 0 0 0px 1px white;
  }
`;

export const FakeCheckbox = styled.div<{ $checked: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${uiColors.primary.lightest};
  z-index: 1;
  ${checkboxStyles}
  box-sizing: border-box;
  width: 20px;
  height: 20px;

  &:focus-visible {
    outline: none; /* Remove default outline */
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%);
    fill: ${uiColors.accent.main};
    display: ${({ $checked }) => ($checked ? 'block' : 'none')};
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const Label = styled.label<{ $align?: TAlignCheckbox }>`

`;

export const TextWrapper = styled.div<{ $align?: TAlignCheckbox }>`
  display: flex;
  flex-direction: column;
  ${({ $align }) =>
    $align === 'left'
      ? css`
          margin-right: 10px;
          order: 0;
        `
      : css`
          margin-left: 10px;
          order: 1;
        `};
  
`