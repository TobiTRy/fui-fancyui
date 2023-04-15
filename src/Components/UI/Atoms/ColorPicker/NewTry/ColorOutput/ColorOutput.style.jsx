import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-between;
`;

export const ColorDisplay = styled.input`
  width: 100%;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const InputLabel = styled.div`
  font-size: 10px;
  text-align: center;
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

export const Input = styled.input`
  width: calc(100% / 6 - 10px);
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`;

export const TypeLabel = styled.span`
  font-size: 14px;
  margin-right: 10px;
`;
