import { css } from 'styled-components';

const scrollbar = css`
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #3d3d3da9;
    border-radius: 12px;
    border: 1px solid transparent;
    background-clip: content-box;
  }
`;

export default scrollbar;
