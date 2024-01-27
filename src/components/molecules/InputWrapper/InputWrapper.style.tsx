import { styled, css } from 'styled-components';

import { disabledStyle } from '@/design/designFunctions/disabledStyle';
import { TTheme } from '@/types/TTheme';

export const StyledInputWrapper = styled.div<{ disabled?: boolean; $autoWidth?: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto;
  width: ${({ $autoWidth }) => ($autoWidth ? 'auto' : '100%')};

  ${({ disabled }) => (disabled ? disabledStyle : '')};
`;

//the style for the error message
export const SystemMessageWrapper = styled.div<{ theme: TTheme }>`
  grid-column: 2;
  grid-row: 2;
  line-height: 1;
  margin-left: 2px;
`;

export const WrapperSystemMessageAndInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

//the input/label/underline are all wrapped in thid container
// eslint-disable-next-line react-refresh/only-export-components
export const generateInputContainerStyle = (hasLabel: boolean, hasSytemMessage?: boolean) => css`
  display: flex;
  gap: 8px;
  grid-column: 2/3;
  border-radius: 12px;
  position: relative;
  align-items: center;
  padding: ${hasLabel
    ? hasSytemMessage
      ? '4px 8px'
      : '4px 8px 9px'
    : hasSytemMessage
      ? '2px 8px 4px'
      : '2px 8px 4px'}; //
`;

// Define the styles for the icon
// eslint-disable-next-line react-refresh/only-export-components
export const generateIconStyle = (hasLabel: boolean) => css<{ theme: TTheme }>`
  flex-shrink: 0;
  margin-top: ${hasLabel ? '8px' : '4px'}; // without label 4px
  transition: 0.25s;
  align-self: center;
`;
