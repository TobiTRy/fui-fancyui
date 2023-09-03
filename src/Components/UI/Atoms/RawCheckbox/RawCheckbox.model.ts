import { HTMLAttributes } from "react";

// the props that will be passed to the input element
type NativeAttrs = Omit<HTMLAttributes<HTMLInputElement>, 'type'>;


// the incoming props custom for the RawCheckbox component
export interface IRawCheckbox {
  label?: string;
  description?: string;
}

// MAIN INCOMMING PROPS PASSED TO THE COMPONENT
export type IRawCheckboxProps = NativeAttrs & IRawCheckbox;
