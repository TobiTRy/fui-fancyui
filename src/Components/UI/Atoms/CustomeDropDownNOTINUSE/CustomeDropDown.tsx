import React, { useState } from 'react';
import { styled } from 'styled-components';
import { fontSize, spacingPx } from '../../Design/designSizes';
import { TUiColorsType } from '../../Design/color/designColor';

// Styled dropdown container
const DropDownContainer = styled.div<{theme: TUiColorsType}>`
  position: relative;
  display: inline-block;
  font-size: ${fontSize.md};
  color: ${({theme}) => theme.secondary.main};
  user-select: none;
`;

// Styled button to trigger the dropdown
const DropDownTrigger = styled.div<{theme: TUiColorsType}>`
  background-color: ${({theme}) => theme.primary.main};
  padding: ${spacingPx.sm};
  cursor: pointer;
  text-align: center;
`;

// Styled dropdown menu
const DropDownMenu = styled.div<{ $isOpen: boolean, theme: TUiColorsType }>`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: ${({theme}) => theme.primary.main};;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

// Styled dropdown item
const DropDownItem = styled.div<{theme: TUiColorsType}>`
  padding: 12px 16px;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.accent.main};;
  }
`;

interface CustomDropdownProps {
  values?: string[];
  onSelect?: (value: string) => void;
}

//This is not a Finished component ist for later replacinge the HTML Select with a custom Dropdown (Searchselect, checkboxselect, etc.)
const CustomDropdown: React.FC<CustomDropdownProps> = (props) => {
  const { values, onSelect } = { ...defaultProps, ...props };
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    onSelect && onSelect(value);
  };

  return (
    <DropDownContainer>
      <DropDownTrigger onClick={() => setIsOpen(!isOpen)}>{selectedValue || 'Select an item'}</DropDownTrigger>
      <DropDownMenu $isOpen={isOpen}>
        {values!.map((value, index) => (
          <DropDownItem key={index} onClick={() => handleSelect(value)}>
            {value}
          </DropDownItem>
        ))}
      </DropDownMenu>
    </DropDownContainer>
  );
};

export default CustomDropdown;

const defaultProps: CustomDropdownProps = {
  values: ['test', 'test2', 'test3'],
};
