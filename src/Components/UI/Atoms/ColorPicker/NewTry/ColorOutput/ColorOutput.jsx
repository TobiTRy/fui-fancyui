import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Color from "color";

import { emitSelectedColorChange } from "../colorPickerUtils";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const ColorDisplay = styled.input`
  width: 70%;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const SwitchButton = styled.button`
  width: 25%;
  padding: 5px 10px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;

const colorFormats = ["rgb", "rgba", "hsl", "hex", "hexa"];

const ColorOutput = ({ pickedColor, opacity }) => {
  const [colorFormatIndex, setColorFormatIndex] = useState(0);
  const [displayedColor, setDisplayedColor] = useState("");

  useEffect(() => {
    const colorObj = Color(pickedColor);
    const colorString = emitSelectedColorChange(colorObj, opacity, colorFormats[colorFormatIndex]);
    setDisplayedColor(colorString);
  }, [pickedColor, colorFormatIndex]);

  const switchColorFormat = () => {
    setColorFormatIndex((prevIndex) => (prevIndex + 1) % colorFormats.length);
  };

  return (
    <Container>
      <ColorDisplay type="text" value={displayedColor} readOnly />
      <SwitchButton onClick={switchColorFormat}>Switch</SwitchButton>
    </Container>
  );
};

export default ColorOutput;