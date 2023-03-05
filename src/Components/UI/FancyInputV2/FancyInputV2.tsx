import React, { useId, useState } from 'react';

import { uiColors, fontSize } from '../../../Design/design';

import IFancyInput from './FancyInput.model';

//TODO: Input with icon
//TODO: Error Handling
//TODO: Search Bar

//TODO: Build a Simple input(atom) and make it usable with the addons

import styled, { css } from 'styled-components';

const alignHandler = (align: string, element: string) => {
  console.log(align);
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
      break;
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
      break;
    case 'LabelInput':
      if (align !== 'center') {
        return css`
          left: 0;
        `;
      } else {
        return css`
          left: 50%;
          transform: translate(-50%);
        `;
      }
      break;
  }
};

const StyledIcon = styled.i`
  bottom: 2px;
  color: white;
  margin-right: 8px;
  margin-bottom: -1px;
`;

const UnderLinedStyle = styled.i<IFancyInput>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.5);
  overflow: hidden;

  &::before {
    content: '';
    border-radius: 5px;
    position: absolute;
    ${({ align }) => alignHandler(align!, 'UnderLinedStyle')};
    height: 100%;
    background: linear-gradient(90deg, ${uiColors.accent.main}, ${uiColors.accent.main_light});
    transition: 0.25s;
    transition-timing-function: ease-in-out;
  }
`;

const LabelInput = styled.label<IFancyInput>`
  position: absolute;
  ${({ align }) => alignHandler(align!, 'LabelInput')};
  padding: 12px 0 5px;
  color: rgba(255, 255, 255, 0.5);
  pointer-events: none;
  letter-spacing: 0.1rem;
  transition: 0.25s;
  user-select: none;
`;

const InputWarpper = styled.div`
  padding-top: 10px;
  position: relative;
`;


const InputStyle = styled.input<IFancyInput>`
  box-sizing: border-box;
  caret-color: ${uiColors.accent.main};
  width: 100%;
  background-color: transparent;
  color: #ffff;
  text-align: ${({ align }) => (align !== 'center' ? 'left' : 'center')};
  border: none;
  outline: none;
  box-shadow: none;
  font-size: ${fontSize.medium};
  letter-spacing: 0.1rem;
  padding: ${({ calculatedType, align }) =>
    calculatedType !== 'password'
      ? //if type is not password
        align === 'center'
        ? `10px 10px 6px`
        : `10px 0px 6px`
      : //if type is password
      align === 'center'
      ? `10px 20px 6px 20px`
      : `10px 20px 6px 0px`};

  ${({ type }) =>
    type === 'password' &&
    css`
      &::-ms-reveal,
      &::-ms-clear {
        display: none;
      }
    `}

  &:focus ~ ${LabelInput}, &:valid ~ ${LabelInput} {
    color: ${uiColors.accent.main};
    font-weight: 600;
    transform: ${({ align }) => (align !== 'center' ? 'translateY(-20px)' : 'translateY(-20px) translate(-50%)')};
    font-size: ${fontSize.small};
  }

  &:focus ~ ${UnderLinedStyle}::before, &:valid ~ ${UnderLinedStyle}::before {
    ${({ align }) => alignHandler(align!, 'InputStyle')};
  }

  &:focus ~ ${InputWarpper}, &:valid ~ ${InputWarpper} {
    color: red;
    background-color: red;
  }
`;

const PasswordIcon = styled.i`
  position: absolute;
  bottom: 4px;
  right: 4px;

  svg {
    color: white;
  }
`;

const Warpper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
`;

export default function FancyInputV2(props: IFancyInput) {
  const { label, type, align, ...inputProps } = props;
  const [showPassword, setShowPassword] = useState(false);

  const id = useId();

  //this condiational clacualtes the type
  const calculatedType = type !== 'password' ? type : showPassword ? 'text' : 'password';

  //TODO: BUILD IN ICON

  return (
    <Warpper>
      {/* this is only the input field */}
      <InputWarpper>
        <StyledIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </StyledIcon>

        {/* the input field  */}
        <InputStyle id={id} calculatedType={type} type={calculatedType} required align={align} {...inputProps}></InputStyle>

        {/* the label for the input field */}
        {label && (
          <LabelInput htmlFor={id} align={align}>
            {label}
          </LabelInput>
        )}

        {/* icons for the password field to show and hide the password */}
        {type === 'password' && (
          <PasswordIcon onClick={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
              </svg>
            )}
          </PasswordIcon>
        )}

        <UnderLinedStyle align={align}></UnderLinedStyle>
      </InputWarpper>
    </Warpper>
  );
}
