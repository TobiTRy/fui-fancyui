
//TODO: Password Input EYE ICON
//TODO: Input with icon
//TODO: Error Handling
//TODO: Search Bar

//TODO: Build a Simple input(atom) and make it usable with the addons

import { uiColors, colorPalet, spacingPx, spacing, fontSize } from '../../../Design/design';

import React, { useId } from 'react';

import styled from 'styled-components';

const LABELStyled = styled.label`
  position: absolute;
  top: 2px;
  display: block;
  transition: 0.15s;
  font-size: 1rem;
  color: #9b9b9b;
	${({align}:IFancyInput) => align === 'center' ?
		`
			left: 50%;
			transform: translate(-50%);
		`
		:
		`
			left: ${spacing.md - 1 + 'px'}
		`
	}

`;


const DIVInputWrapper = styled.div`
  margin: 10px;
  position: relative;
  padding: 15px 0 0;
  width: 100%;

	background-color: #0000002b;

`;

const INPUTStyled = styled.input`
	box-sizing: border-box;
  font-family: inherit;
  font-weight: 500;
  width: 100%;
  border: 0;
  border-bottom: 3px solid #9b9b9b;
  outline: 0;
  margin-top: ${spacingPx.xs};
  font-size: ${fontSize.medium};
  color: ${({textColor}:IFancyInput) => textColor !== "dark" ? colorPalet.light : uiColors.primary.main};
  padding: ${spacingPx.xs} ${spacingPx.md} ${spacingPx.sm} ${spacingPx.md} ;
  background: transparent;
  transition: border-color 0.20s;
  border-radius: 0px;
	text-align: center;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${LABELStyled} {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    /* padding-bottom: 6px; */
    border-width: 3px;
    font-weight: 700;
    border-image: linear-gradient(to right, #ec9f05, ${uiColors.accent.main_light});
    border-image-slice: 1;
  }

  &:focus ~ ${LABELStyled} {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.15s;
    font-size: 1rem;
    color: ${uiColors.accent.main};
    font-weight: 700;
  };

  &:required,
  :invalid {
    box-shadow: none;
    margin: 0;
    margin-top: 2px;
  }
`;


interface IFancyInput {
	label?: string;
	required?: boolean;
	align?: "left" | "center";
	textColor?: "bright" | "dark"; 
	type?: "number" | "email" | "text";
	defaultValue?: "string" | "number";
	onChange?: () => void;
}

export default function FancyInput(props:IFancyInput) {
	const { label, type, align, ...inputProps} = props;

  const id = useId();

  return (
    <DIVInputWrapper>
      <INPUTStyled id={id} type={type ? type : "text" } align={align} placeholder={label} {...inputProps}/>
      {label && <LABELStyled htmlFor={id} align={align} >{label}</LABELStyled>}
    </DIVInputWrapper>
  );
}
