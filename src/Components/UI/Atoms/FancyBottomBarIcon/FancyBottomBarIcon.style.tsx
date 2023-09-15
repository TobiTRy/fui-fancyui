import { styled } from 'styled-components';
import { spacing } from '../../Design/design';
import { disabledStyle } from '../../HelperFunctions/designFunctions/disableStyle';
import { TUiColorsType } from '../../Design/color/designColor';

export const IconTextButton = styled.button<{ $isActive?: boolean; $disabled?: boolean; theme: TUiColorsType }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 78px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  color: ${({ $isActive, theme }) => ($isActive ? theme.accent[0] : theme.secondary[0])};
  transition: all 0.3s ease-in-out;
  ${({ disabled }) => disabled && disabledStyle}
  padding-bottom: ${spacing.xs + 2 + 'px'};

  @media (hover: hover) {
    &:hover {
      color: ${({ disabled, theme }) => !disabled && theme.accent[0]};
    }
  }
`;

export const Underline = styled.i<{ $isActive?: boolean; theme: TUiColorsType }>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 80%;
  height: 1.5px;
  margin-top: 12px;
  border-radius: 10px;
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.accent[0] : 'transparent')};
  transition: all 0.1s ease-in-out;
`;

export const Icon = styled.div`
  height: 18px;
  width: 18px;

  svg {
    height: 100%;
    width: 100%;
  }
`;
