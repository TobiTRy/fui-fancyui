import { css } from "styled-components";

export const alignHandler = (align: string, element: string) => {
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
        return css`
          bottom: 0;
          left: 0;
        `;
      } else {
        return css`
          bottom: 0;
          left: 50%;
          text-align: center;
          transform: translate(-50%);
        `;
      }
  }
};