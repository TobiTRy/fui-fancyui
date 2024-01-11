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
`;

//the input/label/underline are all wrapped in thid container
// eslint-disable-next-line react-refresh/only-export-components
export const generateInputContainerStyle = (hasLabel: boolean) => css`
  display: flex;
  gap: 8px;
  grid-column: 2/3;
  border-radius: 12px;
  position: relative;
  align-items: center;
  padding: ${hasLabel ? '4px 12px 9px' : '2px 8px 6px'}; //
`;

// Define the styles for the icon
// eslint-disable-next-line react-refresh/only-export-components
export const generateIconStyle = (hasLabel: boolean) => css<{ theme: TTheme }>`
  flex-shrink: 0;
  margin-top: ${hasLabel ? '8px' : '4px'}; // without label 4px
  transition: 0.25s;
  align-self: center;
`;
