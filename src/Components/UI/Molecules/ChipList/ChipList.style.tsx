import { styled } from "styled-components";

export const ChipContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  list-style-type: none; // Removes default list styling
  margin: 0; // Removes default margin
`;

export const Chip = styled.li`
  padding: 5px 10px;
  margin: 5px;
  background-color: #007bff;
  color: white;
  border-radius: 15px;
  font-size: 14px;
`;

export const ChipInput = styled.input`
  flex: 1;
  border: none;
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
