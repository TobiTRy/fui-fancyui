import { css, styled } from 'styled-components';
import { IFancyTabSwitchStyle } from './IFancyTab.model';
import { borderRadius, spacingPx } from '../../Design/design';
import { disabledStyle } from '../../HelperFunctions/designFunctions/disableStyle';
import { TUiColorsType } from '../../Design/color/designColor';

// ------------------------------------------------------------------ //
// --------- this genreates the UL List with conditions ------------- //
// ------------------------------------------------------------------ //
export const ULButtonSwitchList = styled.ul<IFancyTabSwitchStyle & { theme: TUiColorsType }>`
  display: ${({ $wide }) => ($wide ? 'flex' : 'inline-flex')};
  align-items: center;
  padding: ${spacingPx.sm};
  margin: 0;
  gap: ${({ $tabSpacing }) => ($tabSpacing ? spacingPx[$tabSpacing] : '0')};
  ${({ $wide }) => $wide && `justify-content: space-around`};

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
