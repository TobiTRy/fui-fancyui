import React from 'react';
import styled from 'styled-components';

// Define a type for the props
type FancyGridTemplateProps = {
  gridTemplate: string[][];
};

// Create a styled component that takes gridTemplate as a prop
const StyledFancyGridTemplate = styled.div<{ gridTemplate: string[][] }>`
  display: grid;
  grid-template-columns: ${(props) => props.gridTemplate.map((row) => row.join(' ')).join(' ')};
  grid-template-rows: ${(props) => props.gridTemplate.map((col) => col.join(' ')).join(' ')};
`;

export default function FancyGridTemplate({ gridTemplate }: FancyGridTemplateProps) {
  return (
    <StyledFancyGridTemplate gridTemplate={gridTemplate}>
      {gridTemplate.map((row, rowIndex) =>
        row.map((cell, cellIndex) => <div key={`${rowIndex}-${cellIndex}`}>{cell}</div>)
      )}
    </StyledFancyGridTemplate>
  );
}
