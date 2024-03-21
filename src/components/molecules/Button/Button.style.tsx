import { styled } from 'styled-components';

import { disabledStyle } from '@/design/designFunctions/disabledStyle/disableStyle';
import generateThemeDesignForComponent, {
  IGenerateThemeDesignForComponent,
} from '@/design/designFunctions/generateThemeDesignForComponent/generateThemeDesignForComponent';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TButton } from './Button.model';
import { generateButtonSizeAndPadding } from '@/components/molecules/Button/utils/generateButtonSizeAndPadding';
import { generateBorderRadiusForComponent } from '@/design/designFunctions/generateBorderRadiusForComponent';
import { RawButton } from '@/components/atoms/RawButton';
import { sizeSettings } from '@/components/molecules/Button/sizeSettings';

export const ButtonStyle = styled.span<IGenerateThemeDesignForComponent & TStyledPrefixAndPicker<TButton>>`
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

  ${(props: IGenerateThemeDesignForComponent & { $disabled?: boolean }) =>
    generateThemeDesignForComponent({ ...props, $backgroundState: props.$disabled ? 'active' : 'hover' })}

  ${({ $sizeC, $borderRadius }) =>
    $borderRadius !== false && generateBorderRadiusForComponent({ sizeC: $sizeC, borderRadius: $borderRadius })};

  ${({ $sizeC, $noSize }) => !$noSize && generateButtonSizeAndPadding($sizeC ?? 'md', true)}

  font-size: ${({ $sizeC, theme }) => theme.fontSizes[sizeSettings[$sizeC ?? 'md'].fontSize].fontSize};
  font-weight: bold;

  ${({ $externalStyle }) => $externalStyle && $externalStyle}

  ${({ $disabled }) => $disabled && disabledStyle}
`;

// the button wrapper is used to make the button full width
export const StyledButton = styled(RawButton)<{ $wide?: boolean }>`
  width: ${({ $wide }) => ($wide ? '100%' : 'fit-content')};
  height: fit-content;
`;
