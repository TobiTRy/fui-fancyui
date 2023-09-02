import React, { useState, HTMLAttributes, useId, useEffect } from 'react';
import { css, styled } from 'styled-components';

import { uiColors } from '../../Design/design';
import Typography from '../Typography/Typography';

// Replace this import path with the correct one for your project
import SVGCheckMark from '../../SVGIcons/SVGCheckMark';

const checkboxStyles = css`
  width: 20px;
  height: 20px;
  border-radius: 4px;
`;

type TAlign = 'left' | 'right' | 'center';
type TAlignCheckbox = 'left' | 'right';

const Wrapper = styled.div<{ $align: TAlign; $alignCheckbox: TAlignCheckbox }>`
  position: relative;
  display: flex;
  flex-direction: ${({ $alignCheckbox }) => ($alignCheckbox === 'right' ? 'row' : 'row-reverse')};
  justify-content: ${({ $align }) => {
    switch ($align) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      case 'center':
        return 'center';
    }
  }};
  align-items: center;
`;

const HidenCheckBox = styled.input`
  margin: 0;
  position: absolute;
  cursor: pointer;
  opacity: 1;
  background-color: transparent;
  z-index: 0;
  appearance: none;
  outline: none;
  ${checkboxStyles}
  margin: 1px;

  &:checked {
    background-color: transparent;
  }

  &:focus-visible {
    box-shadow: 0 0 0px 1px white;
  }
`;

const FakeCheckbox = styled.div<{ $checked: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${uiColors.primary.lightest};
  z-index: 1;
  ${checkboxStyles}
  box-sizing: border-box;

  &:focus-visible {
    outline: none; /* Remove default outline */
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%);
    fill: ${uiColors.accent.main};
    display: ${({ $checked }) => ($checked ? 'block' : 'none')};
  }
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

type NativeAttrs = Omit<HTMLAttributes<HTMLInputElement>, 'type'>;
interface IRawCheckbox {
  label?: string;
  alignCheckbox?: TAlignCheckbox;
  align?: TAlign;
}

type IRawCheckboxProps = NativeAttrs & IRawCheckbox;

export default function RawCheckbox(props: IRawCheckboxProps) {
  const { label, onChange, defaultChecked, align, alignCheckbox, ...rest } = { ...props, ...defaultProps };
  const [checked, setChecked] = useState(false);
  const id = useId();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setChecked(!checked);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (onChange) onChange(e);
  };

  console.log(checked);

  useEffect(() => {
    if (defaultChecked) setChecked(defaultChecked);
  }, [defaultChecked]);

  return (
    <Wrapper $align={align!} $alignCheckbox={alignCheckbox!}>
      {label && (
        <label htmlFor={id}>
          <Typography
            type="inlineElement"
            variant="label"
            style={alignCheckbox === 'right' ? { marginRight: '10px' } : { marginLeft: '10px' }}
          >
            {label}
          </Typography>
        </label>
      )}
      <InputContainer>
        <FakeCheckbox $checked={checked} onClick={handleClick}>
          <SVGCheckMark />
        </FakeCheckbox>
        <HidenCheckBox id={id} type="checkbox" defaultChecked={checked} onChange={handleChange} {...rest} />
      </InputContainer>
    </Wrapper>
  );
}

const defaultProps: IRawCheckbox = {
  align: 'left',
  alignCheckbox: 'left',
};
