import React from "react";
import "../../Design/colorVariables.css";
import { color } from "../../Design/design";

import styled, { css } from "styled-components";

interface IFancyButton {
  size: "small" | "medium" | "large" | "complete";
  label?: string;
  outlined?: boolean;
  color: "bright" | "dark";
  backgroundColor: "primary" | "secondary" | "accent" | "transparent" | "accent_hover"
  onClick?: () => void;
}


// INPUT TYPE
// PRIMARY
// SECONDARY 
// ACCENT^
// TRANSPARENT



const padding = {
  small: 'var(--spacing-sm) var(--spacing-md)',
  medium: 'var(--spacing-sm) var(--spacing-md)',
  large: 'var(--spacing-md) var(--spacing-xl)',
  complete: 'var(--spacing-lg)',
}

const fontSize = {
  small: '14px',
  medium: '16px',
  large: '18px',
  complete: '18px',
}


const bgColor: { [key: string]: string[] } = {
  accent: ['var(--orange)', 'bright'],
  accent_hover: ['var(--orange-dark)', 'bright'],
  secondary: ['var(--lightgreen)'],
  secondary_hover: 'var(--lightgreen-dark)',
  primary: 'var(--darkblue)',
  primary_hover: 'var(--darkblue-dark)',
  transparent: 'transparent',
}



const width = {
  small: '',
  medium: '',
  large: '',
  complete: '100%',
}

const radius = {
  small: 'var(--spacing-xs)',
  medium: 'var(--spacing-sm)',
  large: 'var(--spacing-md)',
  complete: 'var(--spacing-md)'
}

//TODO: Check for optional Values
//TODO: EFFECTS HOVER ETC
//TODO: Alignment 
//TODO: ICONS




const StyledButtonBlank = styled.button`
  display: flex;
  justify-content: center;
  width: ${({ size }: IFancyButton) => width[size]};
  padding: ${({ size }: IFancyButton) => padding[size]};
  font-size: ${({ size }: IFancyButton) => fontSize[size]};
  border: none;
  border-radius: ${({size}: IFancyButton) => radius[size]};
`;

const StyledButtonNormal = styled(StyledButtonBlank)`
  color: ${({ color }:IFancyButton) => (color === 'bright' ? 'var(--white)' : 'var(--dark)')};
  background-color: ${({ backgroundColor}: IFancyButton) => bgColor[backgroundColor]};


  &:hover {
    border-color: ${({ outlined, backgroundColor }: IFancyButton) => outlined ? bgColor[backgroundColor + '_hover'] : 'initial'};
    background-color: ${({ backgroundColor }: IFancyButton) => bgColor[backgroundColor + '_hover']  };
  }


`


const StyledButtonOutlined = styled(StyledButtonBlank)`
  color: ${({ backgroundColor }:IFancyButton) => bgColor[backgroundColor]};
  border: 3px solid ${({ backgroundColor }:IFancyButton) => bgColor[backgroundColor]};
  background-color: transparent;
`


const Icon = (
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
    </svg>
  </span>
);

//rounded
//outlined
//disabled / hoverd
//icon / only icon / icon left or right side
//only text button
//passiv warn secondary

export default function FancyButton({
  label,
  ...props
}: IFancyButton) {
  return (
    <>
      <StyledButtonOutlined type="button" {...props}>
        {label}
      </StyledButtonOutlined>
      <StyledButton type="button" {...props}>
        {label}
      </StyledButton>
    </>
  );
}
