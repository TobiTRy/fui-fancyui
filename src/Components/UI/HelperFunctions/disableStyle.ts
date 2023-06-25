import { css } from "styled-components"


//this function returns a disabled style
export const disabledStyle = () => {
    return css`
      opacity: 0.6;
      filter: brightness(0.9);
    `
  }