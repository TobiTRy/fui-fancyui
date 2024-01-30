import { styled } from 'styled-components';

import { disabledStyle } from '@/design/designFunctions/disabledStyle/disableStyle';
import generateThemeDesignForComponent, {
  IGenerateThemeDesignForComponent,
} from '@/design/designFunctions/generateThemeDesignForComponent/generateThemeDesignForComponent';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
import { IButtonProps } from './Button.model';
import { generateButtonSizeAndPadding } from '@/components/molecules/Button/utils/generateButtonSizeAndPadding';
import { generateBorderRadiusForComponent } from '@/design/designFunctions/generateBorderRadiusForComponent';
import { RawButton } from '@/components/atoms/RawButton';

export const ButtonStyle = styled.span<IGenerateThemeDesignForComponent & IStyledPrefixAndPicker<IButtonProps>>`
  display: inline-flex;
  height: fit-content;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  align-items: center;
  text-decoration: none;
  text-align: center;
  width: ${({ $wide }) => ($wide ? '100%' : 'fit-content')};
  min-width: fit-content;
  transition:
    background-color 0.125s ease-in-out,
    color 0.125s ease-in-out;

  ${(props: IGenerateThemeDesignForComponent) =>
    generateThemeDesignForComponent({ ...props, $backgroundState: 'hover' })};

  ${({ $sizeC, $borderRadius, theme }) =>
    $borderRadius === false && generateBorderRadiusForComponent({ theme, size: $sizeC, rounded: $borderRadius })};

  ${({ $sizeC, $noSize }) => !$noSize && generateButtonSizeAndPadding($sizeC ?? 'md', true)}

  ${({ $externalStyle }) => $externalStyle && $externalStyle}

  &:disabled {
    ${disabledStyle}
  }
`;

export const StyledButton = styled(RawButton)<{ $wide?: boolean }>`
  width: ${({ $wide }) => ($wide ? '100%' : 'fit-content')};
`;
