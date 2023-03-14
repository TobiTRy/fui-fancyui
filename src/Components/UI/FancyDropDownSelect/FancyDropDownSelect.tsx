import React, { useId, useState } from 'react';
import styled from 'styled-components';

import { uiColors, fontSize, spacingPx, colorPalet } from '../Design/design';
import { IFancyDropDownSelect } from './IFancyDropDownSelect.model';

import { alignHandler } from '../HelperFunctions/alignmentHandler';

const Label = styled.label<{ align?: string }>`
  position: absolute;
  width: 100%;
  ${({ align }) => alignHandler(align!, 'LabelInput')};
  padding: 12px 0 5px;
  color: gray;
  font-weight: bold;
  pointer-events: none;
  transition: 0.3s;
  user-select: none;
  transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
`;

//the underline for the select field
const UnderLinedStyle = styled.i<{ align?: string }>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  border-radius: 5px;
  background: gray;
  overflow: hidden;

  &::before {
    opacity: 0;
    width: 0;
    content: '';
    border-radius: 5px;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, ${uiColors.accent.main}, ${uiColors.accent.main_light});
    transition: 0.25s;
    transition-timing-function: ease-in;
  }
`;

//the styling for each option item
const Option = styled.option<{ align?: string }>`
  background-color: ${uiColors.primary.hover};
  text-align: ${({ align }) => (align !== 'left' ? 'center' : 'left')};
  color: ${colorPalet.white_high};

  &:disabled {
    background: ${uiColors.primary.main_light};
  }
`;

const SelectContainer = styled.div`
  width: 100%;
  grid-column: 2/3;
  padding-top: 10px;
  position: relative;
`;

//the selectfield for the options
const SelectField = styled.select<{ align?: string; labelAlign?: string }>`
  position: relative;
  box-sizing: border-box;
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='white'><path d='M.508 5.444c-.261.246-.363.508-.363.9 0 .523.174.726 4.181 4.718 3.861 3.861 4.21 4.18 4.674 4.18s.813-.319 4.674-4.181c4.007-3.992 4.181-4.195 4.181-4.717 0-.711-.523-1.263-1.19-1.263-.421 0-.842.377-4.065 3.585L9 12.252 5.4 8.666C2.177 5.458 1.756 5.081 1.335 5.081c-.319 0-.595.131-.827.363z'/></svg>");
  background-repeat: no-repeat;
  background-position: right ${spacingPx.sm} top 60%;
  text-align-last: ${({ align }) => (align !== 'center' ? 'left' : 'center')};
  border: none;
  height: 40px;
  width: 100%;
  font-weight: 500;
  user-select: none;
  color: ${colorPalet.white_high};
  appearance: none;
  padding: 12px 0 4px;
  font-size: ${fontSize.medium};
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &:focus ${Option}:checked {
    background: ${uiColors.accent.hover};
  }
  
  &:focus ~ ${Label}, &:valid ~ ${Label} {
    color: ${uiColors.accent.main};
    transform: ${({ labelAlign }) => (labelAlign !== 'center' ? 'translateY(-20px)' : 'translateY(-20px) translate(-50%)')};
  }

  &:focus ~ ${UnderLinedStyle}::before {
    opacity: 1;
  }
`;

//the wrapper for the complete component
const Wrapper = styled.div<{ align?: string }>`
  position: relative;
  color: ${uiColors.primary.contrast};
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
`;


const Icon = styled.i<{active: boolean}>`
  margin-right: 8px;
  margin-bottom: 2px;
  transition: 0.5s;
  display: flex;
  align-items: flex-end;
  color: ${({ active }) => (active ? uiColors.accent.main : 'gray')};

  svg {
    height: 20px;
    width: 20px;
  }
`;

// ------------------------------------------------------------------ //
// ------------- main component for the drop down --------------- //
// ------------------------------------------------------------------ //
export default function FancyDropDownSelect(props: IFancyDropDownSelect) {
  const { label, selected, options, labelAlign, inputTextAlign, icon, onChange } = props;

  const id = useId();

  //this state switches when the input is focused
  const [isActive, setIsActive] = useState(false);
  
  return (<>
    <Wrapper align={labelAlign}>
      { icon && <Icon active={isActive}>
        {icon}
      </Icon> }
      <SelectContainer>
        <SelectField id={id} align={inputTextAlign} labelAlign={labelAlign} defaultValue={selected ? selected : ''} required onChange={onChange} onBlur={() => setIsActive(false)} onFocus={() => setIsActive(true)}>
          {/* placeholder for costom text like "Please Select a item" */}

          <Option value="" hidden className="disabled" align={inputTextAlign} disabled>
            {' '}
          </Option>

          {/* placeholder for costome text like "Please Select a item" */}
          {options?.map((item, i) => (
            <Option key={i} value={item.toLowerCase()} align={inputTextAlign} >
              {item}
            </Option>
          ))}
        </SelectField>

        {label && (
          <Label htmlFor={id} align={labelAlign}>
            {label}
          </Label>
        )}
        {/* the underline for the select field */}
        <UnderLinedStyle align={inputTextAlign} />
      </SelectContainer>
    </Wrapper>
  </>
  );
}
