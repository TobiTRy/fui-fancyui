import { styled, css } from 'styled-components';

import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { IFancyTabStyle } from '../../Molecules/FancyTabSwitch/IFancyTab.model';
import { spacingPx } from '../../Design/design';
import { textShadow } from '../../Design/shadows';
import themeStore from '../../Design/color/themeStore';

// ------------------------------------------------------------------ //
// ----------- the helperfunctions for the style generate ----------- //
// ------------------------------------------------------------------ //
//generates the style from the dynamic values of the tab
type ILIStyledButton = IStyledPrefixAndPicker<IFancyTabStyle, 'transparent' | 'textColor' | 'iconAlign' | 'wide'>;

const generateDynamicTabStyle = (props: Pick<ILIStyledButton, '$transparent' | '$textColor'>) => {
  const { $transparent, $textColor } = props;
  const theme = themeStore.getState().theme;

  //if the background not transparent give him a background/text color
  if (!$transparent) {
    return css`
      background-color: ${theme.primary[1]};
      color: ${theme.secondary[0]};
    `;
  } else {
    //when the it is transparent style it with underline
    return css`
      color: ${$textColor === 'dark' ? theme.primary[0] : theme.secondary[0]};
      background-color: transparent;
      border-bottom: 1.5px solid transparent;
    `;
  }
};

//when the item is aktiv(clicked) this style is used
const generateCheckedStyle = (props: IStyledPrefixAndPicker<IFancyTabStyle, 'transparent'>) => {
  const { $transparent } = props;
  const theme = themeStore.getState().theme;

  return css`
    ${!$transparent
      ? css`
          &:checked + label {
            ${textShadow.sm}
            background-color: ${theme.accent[0]};
          }
        `
      : css`
          &:checked + label {
            color: ${theme.accent[0]};
            border-bottom: 1.5px solid ${theme.accent[0]};
          }
        `}
  `;
};

//this functions hold little childs for the label
const generateLabelChilds = (props: Pick<ILIStyledButton, '$iconAlign'>) => {
  const { $iconAlign } = props;

  return css`
    i {
      display: flex;
      justify-content: center;

      ${$iconAlign === 'right'
        ? css`
            padding-left: ${spacingPx.xs};
            order: 1;
          `
        : css`
            padding-right: ${spacingPx.xs};
          `};
    }

    svg {
      width: 24px;
      height: 24px;
    }
  `;
};

// ------------------------------------------------------------------ //
// ------------ the main style generator for the li item ------------ //
// ------------------------------------------------------------------ //
const generateButtonStyle = (props: ILIStyledButton) => {
  const { $wide } = props;

  return css`
    list-style: none;
    width: ${$wide ? `100%` : `auto`};

    label {
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
      justify-content: center;
      align-items: center;
      text-align: center;
      cursor: pointer;
      width: 100%;
      user-select: none;

      padding: ${$wide ? `${spacingPx.md} 0px` : `${spacingPx.md}`};
      //handles the dynamic values
      ${generateDynamicTabStyle({ $transparent: props.$transparent, $textColor: props.$textColor })}
      // generates underlying childs in this element
      ${generateLabelChilds(props)}
    }

    input {
      display: none;
      ${generateCheckedStyle(props)}
    }
  `;
};

export const LISwitchButtonStyle = styled.li<ILIStyledButton>`
  ${generateButtonStyle}
`;
