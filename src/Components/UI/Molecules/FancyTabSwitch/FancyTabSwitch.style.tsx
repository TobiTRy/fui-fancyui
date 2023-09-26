import { css, styled } from 'styled-components';
import { borderRadius, spacingPx } from '../../Design/design';
import { disabledStyle } from '../../HelperFunctions/designFunctions/disableStyle';
import { TUiColorsType } from '../../Design/color/designColor';
import { tabSwitchSizes } from './FancyTabSwitch';

// ------------------------------------------------------------------ //
// --------- this genreates the UL List with conditions ------------- //
// ------------------------------------------------------------------ //
interface IFancyTabSwitchStyle {
  $transparent?: boolean;
  $rounded?: keyof typeof borderRadius;
  $roundedTabs?: boolean;
  $wide?: boolean;
  $tabSpacing?: keyof typeof spacingPx;
  disabled?: boolean;
  theme: TUiColorsType;
  padding?: keyof typeof tabSwitchSizes;
}
export const ULButtonSwitchList = styled.ul<IFancyTabSwitchStyle & { theme: TUiColorsType }>`
  display: ${({ $wide }) => ($wide ? 'flex' : 'inline-flex')};
  padding: ${({ padding }) => (padding ? tabSwitchSizes[padding].paddingComponent : '0')};
  gap: ${({ $tabSpacing }) => ($tabSpacing ? spacingPx[$tabSpacing] : '0')};
  ${({ $wide }) => $wide && `justify-content: space-around`};
  align-items: center;
  margin: 0;

  //this handles the the backgroundcolor and the edge rounding when the backorund is not transparent
  ${({ $transparent, $rounded, $roundedTabs, $tabSpacing, theme }) =>
    !$transparent &&
    css`
      background-color: ${!$tabSpacing ? theme.primary[3] : 'transparent'};

      ${$rounded &&
      css`
        border-radius: ${borderRadius[$rounded]};

        //if each tab sould not rounded, than round the first and the last item
        ${!$roundedTabs
          ? css`
              li:first-of-type label {
                border-radius: ${borderRadius[$rounded]} 0 0 ${borderRadius[$rounded]};
              }

              li:last-of-type label {
                border-radius: 0 ${borderRadius[$rounded]} ${borderRadius[$rounded]} 0;
              }
            `
          : //round each label
            css`
              li label {
                border-radius: ${borderRadius[$rounded]};
              }
            `}
      `}
    `}

  //this hanles the disabled style
  ${({ disabled }) => disabled && disabledStyle}
`;
