import { css } from 'styled-components';
import { uiColors } from '../../Design/design';

const itenIsDeaktivatedAndCenterd = () => {
  return css`
    transform: translateY(-20px) translate(-50%);
    color: ${uiColors.accent.main};
  `;
};

const itemIsDeaktivatedAndAlinedLeft = () => {
  return css`
    color: ${uiColors.accent.main};
    transform: translateY(-20px);
  `;
};

export const alignHandler = (align: string, element: string, active?: boolean) => {
  switch (element) {
    case 'InputStyle':
      if (align !== 'center') {
        return css`
          width: 100%;
          left: 0;
        `;
      } else {
        return css`
          width: 100%;
          left: 50%;
          transform: translate(-50%);
        `;
      }
    //underline is not longer needed you can remove it later when you sure about this
    case 'UnderLinedStyle':
      if (align !== 'center') {
        return css`
          left: -100%;
        `;
      } else {
        return css`
          left: 50%;
          transform: translate(-50%);
          width: 0%;
        `;
      }
    case 'LabelInput':
      if (align !== 'center') {
        const disabledActiveStyle = active ? itemIsDeaktivatedAndAlinedLeft() : '';
        return css`
          bottom: 0;
          left: 0;
          ${disabledActiveStyle};
        `;
      } else {
        const disabledActiveStyle = active ? itenIsDeaktivatedAndCenterd() : 'transform: translate(-50%);';
        return css`
          bottom: 0;
          left: 50%;
          text-align: center;
          ${disabledActiveStyle};
        `;
      }
  }
};
