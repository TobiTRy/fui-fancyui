import styled, { css } from 'styled-components';
import { colorPalet, uiColors } from '../../Design/design';
import InputLabel from '../InputLabel/InputLabel';

const activeHandler = (align: string, $moveUp?: boolean) => {
  if (align !== 'center') {
    return css`
      bottom: 0;
      left: 0;
      ${$moveUp
        ? css`
            transform: translateY(-20px);
          `
        : ''}
    `;
  } else {
    return css`
      bottom: 0;
      left: 50%;
      text-align: center;
      ${$moveUp
        ? css`
            transform: translateY(-20px) translate(-50%);
          `
        : 'transform: translate(-50%);'};
    `;
  }
};

//the animated label is for the inputs where the Placholder is the label
interface IAnimatedInputLabel {
  $align?: 'center' | 'left';
  $moveUp?: boolean;
  $colorState?: 'error' | 'active' | 'default';
}

export const AnimatedInputLabel = styled(InputLabel)<IAnimatedInputLabel>`
  position: absolute;
  padding: 12px 0 5px;
  color: ${({ $colorState }) => {
    switch ($colorState) {
      case 'error':
        return colorPalet.red_light;
      case 'active':
        return uiColors.accent.main;
      default:
        return uiColors.secondary.darkest;
    }
  }};

  ${({ $align, $moveUp }) => activeHandler($align!, $moveUp)};
`;

export const AnimatedLabelFocusStyle = ($align?: 'center' | 'left', $errorMessage?: string) => {
  const isErrorMessage = $errorMessage ? colorPalet.red_dark : uiColors.accent.main;

  //the focus animation for the Label
  return css`
    &:focus ~ ${AnimatedInputLabel}, &:valid ~ ${AnimatedInputLabel} {
      font-weight: 600;
    }
  `;
};
