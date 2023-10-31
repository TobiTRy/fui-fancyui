import { styled } from 'styled-components';
import { disabledStyle } from '../../HelperFunctions/designFunctions/disableStyle';
import generateThemeDesignForComponent, { IGenerateThemeDesignForComponent } from '../../HelperFunctions/designFunctions/generateThemeDesignForComponent/generateThemeDesignForComponent';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { IButtonProps } from './Button';

export const StyledButton = styled.button<IGenerateThemeDesignForComponent & IStyledPrefixAndPicker<IButtonProps>>`
  display: inline-flex;
  height: fit-content;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  align-items: center;
  text-decoration: none;
  width: ${({ $wide }) => ($wide ? '100%' : 'fit-content')};
  min-width: fit-content;
  transition: background-color 0.125s ease-in-out, color 0.125s ease-in-out;

  ${(props: IGenerateThemeDesignForComponent) => generateThemeDesignForComponent({ ...props, $backgroundState: 'hover' })};

  ${({ $externalStyle }) => $externalStyle && $externalStyle}

  &:disabled {
    ${disabledStyle}
  }
`;
