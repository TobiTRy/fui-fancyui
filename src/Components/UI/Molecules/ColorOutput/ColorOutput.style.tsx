import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;


export const ColorDisplay = styled.input`
  width: 100%;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 5px;
`;



export const SwitchButton = styled.button`
  width: 25%;
  padding: 5px 10px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;



export const TypeLabel = styled.span`
  font-size: 14px;
  margin-right: 10px;
`;
