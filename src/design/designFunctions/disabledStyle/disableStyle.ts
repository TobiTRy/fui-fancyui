import { css } from 'styled-components';

//this function returns a disabled style
export const disabledStyle = () => {
  return css`
    opacity: 0.6;
    filter: brightness(0.9);

    transition:
      opacity 0.2s ease-in-out,
      filter 0.2s ease-in-out;
  `;
};

export default disabledStyle;
