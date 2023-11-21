import React from 'react';
import { styled } from 'styled-components';
import { TTheme } from '@/Components/UI/Interface/TTheme';

const RadioWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  margin: 0;
  position: absolute;
  cursor: pointer;
  opacity: 1;
  background-color: transparent;
  z-index: 0;
  appearance: none;
  outline: none;
  width: 16px;
  height: 16px;
`;

const StyledRadio = styled.span<{ checked: boolean; theme: TTheme }>`
  width: 16px;
  height: 16px;
  border: 2px solid ${(props) => (props.checked ? props.theme.colors.accent[2] : props.theme.colors.primary[3])};
  background: ${(props) => (props.checked ? 'transparent' : props.theme.colors.primary[3])};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  flex-shrink: 0;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(props) => (props.checked ? props.theme.colors.accent[1] : 'transparent')};
    transition: background 0.2s;
  }
`;

interface RawRadioProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function RawRadio(props: RawRadioProps) {
  const { id, name, value, checked, onChange } = props;
  return (
    <RadioWrapper>
      <StyledRadio checked={checked} />
      <HiddenRadio id={id} name={name} value={value} checked={checked} onChange={onChange} />
    </RadioWrapper>
  );
}
