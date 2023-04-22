import React, { useState, useEffect } from "react";
import InputFields from "./InputFields/InputFields";
import { Container,  SwitchButton, TypeLabel } from "./ColorOutput.style";
import Color from "color";
import { emitSelectedColorChange } from "../../Organisms/ColorPicker/colorPickerUtils";

const colorFormats = ["rgb", "rgba", "hsl", "hex", "hexa"];

const ColorOutput = ({ pickedColor, opacity }) => {
  const [colorFormatIndex, setColorFormatIndex] = useState(0);
  const [displayedColor, setDisplayedColor] = useState("");

  useEffect(() => {
    if (pickedColor) {
      const colorObj = Color(pickedColor);
      const colorString = emitSelectedColorChange(colorObj, opacity, colorFormats[colorFormatIndex]);
      setDisplayedColor(colorString);
    }
  }, [pickedColor, colorFormatIndex]);

  const switchColorFormat = () => {
    setColorFormatIndex((prevIndex) => (prevIndex + 1) % colorFormats.length);
  };

  const renderInputFields = () => {
    if (!displayedColor) return null;

    const colorObj = Color(displayedColor);
    const colorFormat = colorFormats[colorFormatIndex];

    return (
      <InputFields
        colorFormat={colorFormat}
        colorObj={colorObj}
        handleInputChange={handleInputChange}
      />
    );
  };

  const handleInputChange = (field, value) => {
    const colorObj = Color(displayedColor);
    let newColor;

    if (field === "hex") {
      newColor = Color(value);
    } else if (field === "a") {
      const colorObject = colorObj.object();
      colorObject.alpha = parseFloat(value);
      newColor = Color(colorObject);
    } else {
      const colorValues = { ...colorObj.object() };

      if (field === "h") {
        colorValues[field] = value === "" ? 0 : parseFloat(value) % 360;
      } else if (["s", "l"].includes(field)) {
        colorValues[field] = value === "" ? 0 : Math.min(parseFloat(value), 100);
      } else {
        colorValues[field] = value === "" ? 0 : parseFloat(value);
      }

      newColor = Color(colorValues);
    }

    setDisplayedColor(newColor.toString());
  };

  return (
    <Container>
        <TypeLabel>{colorFormats[colorFormatIndex].toUpperCase()}</TypeLabel>
        {renderInputFields()}
      <SwitchButton onClick={switchColorFormat}>
        ↕
      </SwitchButton>
    </Container>
  );
};

export default ColorOutput;
