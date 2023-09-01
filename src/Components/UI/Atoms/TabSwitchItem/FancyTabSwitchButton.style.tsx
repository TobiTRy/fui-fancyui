import { styled, css } from 'styled-components';

import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { IFancyTabStyle } from '../../Molecules/FancyTabSwitch/IFancyTab.model';
import { spacingPx, uiColors } from '../../Design/design';
import { textShadow } from '../../Design/shadows';

// ------------------------------------------------------------------ //
// ----------- the helperfunctions for the style generate ----------- //
// ------------------------------------------------------------------ //
//generates the style from the dynamic values of the tab
type ILIStyledButton = IStyledPrefixAndPicker<IFancyTabStyle, 'transparent' | 'textColor' | 'iconAlign' | 'wide'>;

const generateDynamicTabStyle = (props: Pick<ILIStyledButton, '$transparent' | '$textColor'>) => {
  const { $transparent, $textColor } = props;

  //if the background not transparent give him a background/text color
  if (!$transparent) {
    return css`
      background-color: ${uiColors.primary.light};
      color: ${uiColors.primary.contrast};
    `;
  } else {
    //when the it is transparent style it with underline
    return css`
      color: ${$textColor === 'dark' ? uiColors.primary.main : uiColors.primary.contrast};
      background-color: transparent;
      border-bottom: 1.5px solid transparent;
    `;
  }
};

//when the item is aktiv(clicked) this style is used
const generateCheckedStyle = (props: IStyledPrefixAndPicker<IFancyTabStyle, 'transparent'>) => {
  const { $transparent } = props;
  return css`
    ${!$transparent
      ? css`
          &:checked + label {
            ${textShadow.sm}
            background-color: ${uiColors.accent.main};
          }
        `
      : css`
          &:checked + label {
            color: ${uiColors.accent.main};
            border-bottom: 1.5px solid ${uiColors.accent.main};
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
