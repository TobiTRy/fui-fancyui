import { css } from "styled-components";


export const textShadow = css`text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);`


// add dropshadow in different strengths in a object
export const dropShadow = {
  small: css`box-shadow: 1px 0px 5px #000000e3;`,
  medium: css`box-shadow: 1px 0px 15px #000000e3;`,
  large: css`box-shadow: 1px 0px 23px #000000e3;`,
}
