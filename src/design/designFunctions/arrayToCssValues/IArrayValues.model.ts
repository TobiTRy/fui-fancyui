import { TSpacings } from '@/interface/TSpacings';

// the edge can be a string, number or TBorderRadiusSizes
export type TValue = TSpacings | string | number;

// the rounded edges are an array of 4 values
export type TArrayToCssValues = [TValue?, TValue?, TValue?, TValue?];
