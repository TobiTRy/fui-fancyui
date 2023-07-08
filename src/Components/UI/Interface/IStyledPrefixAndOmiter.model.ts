// This sets a Prefix for each key in an object PrefixKeys<ISVGAtom, '$'>
// type IStyledSVGAtom = {
//     $children: React.ReactNode;
//     $size: ISizes;
//     $isActive?: boolean;
//     $passivElement?: boolean;
//     $errorMessage?: string;
//     $externalStyle?: CSSProp;
//   };



type IStyledPrefixAndOmiter<T extends Record<string, any>, U extends keyof any = never> = {
    [P in Exclude<keyof T, U> & string as `$${P}`]: T[P];
  };

export default IStyledPrefixAndOmiter;

//type IStyledSVGAtom = PrefixKeys<ISVGAtom, '$children'>;
