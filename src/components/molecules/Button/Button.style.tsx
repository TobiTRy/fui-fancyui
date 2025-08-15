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
  height: fit-content;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  align-items: center;
  text-decoration: none;
  text-align: center;
  width: ${({ $wide }) => ($wide ? '100%' : 'fit-content')};
  min-width: fit-content;

  ${(props: IGenerateThemeDesignForComponent & { $disabled?: boolean }) =>
    generateThemeDesignForComponent({
      ...props,
      $backgroundState: props.$disabled ? 'active' : (props.$backgroundState ?? 'hover'),
    })}

  ${({ $sizeC, $borderRadius }) =>
    $borderRadius !== false &&
    generateBorderRadiusForComponent({
      sizeC: $sizeC === 'xs' ? 'sm' : $sizeC === 'xl' ? 'lg' : $sizeC,
      borderRadius: $borderRadius,
    })};

  ${({ $sizeC, $noSize, $outlined }) => !$noSize && generateButtonSizeAndPadding($sizeC ?? 'md', true, $outlined)}

  > span {
    font-size: ${({ $sizeC, theme }) => theme.fontSizes[sizeSettings[$sizeC ?? 'md'].fontSize].fontSize};
    line-height: ${({ $sizeC, theme }) => theme.spacing[sizeSettings[$sizeC ?? 'md'].lineHeight]} !important;
    font-weight: bold;
  }

  ${({ $disabled }) => $disabled && disabledStyle}
  ${({ $externalStyle }) => $externalStyle && $externalStyle}
  
  transition:
    background-color 0.125s ease-in-out,
    color 0.125s ease-in-out,
    border-color 0.125s ease-in-out,
    filter 0.125s ease-in-out
`;

// the button wrapper is used to make the button full width
export const StyledButton = styled(RawButton)<{ $wide?: boolean }>`
  width: ${({ $wide }) => ($wide ? '100%' : 'fit-content')};
  height: fit-content;
`;
