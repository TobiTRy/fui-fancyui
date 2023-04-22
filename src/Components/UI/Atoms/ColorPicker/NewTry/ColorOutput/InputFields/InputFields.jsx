import React from "react";
import { Input, InputLabel, Wrapper, WrapperInput } from "./InputFields.style";

import UnderLine from "../../../../InputUnderline";

import FancyInput from "../../../../../Molecules/FancyInput/FancyInput";

const InputFields = ({ colorFormat, colorObj, handleInputChange }) => {
  if (!colorObj || !colorFormat) return null;

  const fields = [];

  switch (colorFormat) {
    case "rgb":
    case "rgba":
      fields.push("r", "g", "b");
      if (colorFormat === "rgba") fields.push("a");
      break;
    case "hsl":
      fields.push("h", "s", "l");
      break;
    case "hex":
    case "hexa":
      fields.push("hex");
      break;
    default:
      break;
  }

  const colorObject = colorObj.object();

  return (
    <Wrapper>
      {fields.map((field, index) => (
        <WrapperInput key={index}>
          <FancyInput align="center"
            type="text"
            value={
              field === "hex"
                ? colorObj.hex()
                : field === "a"
                ? (colorObject.alpha || 1).toFixed(2)
                : colorObject.hasOwnProperty(field)
                ? colorObject[field]
                : ""
            }
            onChange={(e) => handleInputChange(field, e.target.value)}
          />
          <InputLabel>{field.toUpperCase()}</InputLabel>
        </WrapperInput>
      ))}
    </Wrapper>
  );
};

export default InputFields;
