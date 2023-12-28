import { TSpacings } from '@/interface/TSpacings';

// the edge can be a string, number or TBorderRadiusSizes
export type TValue = TSpacings | string | number;

// the rounded edges are an array of 4 values
export type TArrayToCssValues = [TValue?, TValue?, TValue?, TValue?];

// the input can be an array or a single value
export type TArrayToCssValuesInputProps = TArrayToCssValues | TValue;
