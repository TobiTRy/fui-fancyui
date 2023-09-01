import { css } from 'styled-components';

//global text-shadow
export const textShadow = {
  sm: css`
    text-shadow: 1px 1px 1px black;
  `,
  md: css`
    text-shadow: 0 0 15px #19191980;
  `,
  lg: css`
    text-shadow: 0 0 20px black;
  `,
};

//global box-shadow
export const boxShadow = {
  sm: css`
    box-shadow: 1px 0px 5px #000000e3;
  `,
  md: css`
    box-shadow: 1px 0px 15px #000000e3;
  `,
  lg: css`
    box-shadow: 1px 0px 23px #000000e3;
  `,
};
