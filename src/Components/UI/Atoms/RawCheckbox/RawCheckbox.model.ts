import { HTMLAttributes } from "react";

// the incoming props custom for the RawCheckbox component
export type TAlign = 'left' | 'right' | 'center';
export type TAlignCheckbox = 'left' | 'right';

// the props that will be passed to the input element
type NativeAttrs = Omit<HTMLAttributes<HTMLInputElement>, 'type'>;


// the incoming props custom for the RawCheckbox component
export interface IRawCheckbox {
  label?: string;
  alignCheckbox?: TAlignCheckbox;
  align?: TAlign;
}

// MAIN INCOMMING PROPS PASSED TO THE COMPONENT
export type IRawCheckboxProps = NativeAttrs & IRawCheckbox;
