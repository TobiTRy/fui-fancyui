import { styled, css } from 'styled-components';

import { disabledStyle } from '@/design/designFunctions/disabledStyle';
import { TTheme } from '@/types/TTheme';

export const StyledInputWrapper = styled.div<{ disabled?: boolean; $autoWidth?: boolean; theme: TTheme }>`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto;
  width: ${({ $autoWidth }) => ($autoWidth ? 'auto' : '100%')};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

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
export const generateInputContainerStyle = (hasLabel: boolean, isActive: boolean, theme: TTheme) => css`
  display: flex;
  gap: 8px;
  grid-column: 2/3;
  border-radius: 12px;
  position: relative;
  align-items: center;
  padding: ${hasLabel
    ? `${theme.spacing.xxs}  ${theme.spacing.sm} ${theme.spacing.xs}`
    : `2px ${theme.spacing.sm} ${theme.spacing.xxs}`};

  ${isActive
    ? css`
        box-shadow: 0 0 0 1px ${theme.color.accent[0]};
      `
    : ''}
`;

// Define the styles for the icon
// eslint-disable-next-line react-refresh/only-export-components
export const generateIconStyle = (hasLabel: boolean) => css<{ theme: TTheme }>`
  flex-shrink: 0;
  margin-top: ${hasLabel ? '12px' : '5px'};
  transition: 0.25s;
  align-self: self-start;
`;
