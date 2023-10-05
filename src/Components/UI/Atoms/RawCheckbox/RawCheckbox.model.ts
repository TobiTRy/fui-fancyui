import { HTMLAttributes } from "react";

// the props that will be passed to the input element
type NativeAttrs = Omit<HTMLAttributes<HTMLInputElement>, 'type'>;

// MAIN INCOMMING PROPS PASSED TO THE COMPONENT
export type IRawCheckboxProps = NativeAttrs;
