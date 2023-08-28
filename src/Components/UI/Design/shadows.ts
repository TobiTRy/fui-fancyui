import { css } from 'styled-components';

//global text-shadow
export const textShadow = {
  small: css`
    text-shadow: 1px 1px 1px black;
  `,
  medium: css`
    text-shadow: 0 0 15px #19191980;
  `,
  large: css`
    text-shadow: 0 0 20px black;
  `,
};

//global box-shadow
export const boxShadow = {
  small: css`
    box-shadow: 1px 0px 5px #000000e3;
  `,
  medium: css`
    box-shadow: 1px 0px 15px #000000e3;
  `,
  large: css`
    box-shadow: 1px 0px 23px #000000e3;
  `,
};
