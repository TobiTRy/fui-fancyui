// This sets a Prefix for each key in an object PrefixKeys<ISVGAtom, '$'>
// type IStyledSVGAtom = {
//     $children: React.ReactNode;
//     $size: ISizes;
//     $isActive?: boolean;
//     $passivElement?: boolean;
//     $errorMessage?: string;
//     $externalStyle?: CSSProp;
//   };

// type IStyledPrefixAndPicker<T extends Record<string, any>, U extends keyof T = never> = {
//   [P in Extract<U, string> as `$${P}`]: T[P];
// };

// type IStyledPrefixAndPicker<T extends Record<string, any>, U extends keyof T = keyof T> = {
//   [P in Extract<U, string> as `$${P}`]?: T[P];
// };
type IStyledPrefixAndPicker<T extends Record<string, any>, U extends keyof T = keyof T> = {
  [P in Extract<U, string> as `$${P}`]: T[P];
};


export default IStyledPrefixAndPicker;
//type IStyledSVGAtom = PrefixKeys<ISVGAtom, '$children'>;
