// This sets a Prefix for each key in an object PrefixKeys<ISVGAtom, '$'>
// type IStyledSVGAtom = {
//     $children: React.ReactNode;
//     $size: ISizes;
//     $isActive?: boolean;
//     $passivElement?: boolean;
//     $errorMessage?: string;
//     $externalStyle?: CSSProp;
//   };



// type IStyledPrefixAndOmiter<T extends Record<string, any>, U extends keyof any = never> = {
//     [P in Exclude<keyof T, U> & string as `$${P}`]: T[P];
//   };


type StringKeys<T> = Extract<keyof T, string>;

type RequiredKeys<T> = {
  [K in StringKeys<T>]: undefined extends T[K] ? never : K
}[StringKeys<T>];

type OptionalKeys<T> = Exclude<StringKeys<T>, RequiredKeys<T>>;

type RequiredKeysAfterOmit<T, U extends StringKeys<T>> = Exclude<RequiredKeys<T>, U>;

type OptionalKeysAfterOmit<T, U extends StringKeys<T>> = Exclude<OptionalKeys<T>, U>;

type IStyledPrefixAndOmitter<T extends Record<string, any>, U extends StringKeys<T> = never> = {
    // Required properties after omitting
    [P in RequiredKeysAfterOmit<T, U> as `$${P}`]: T[P];
} & {
    // Optional properties after omitting
    [P in OptionalKeysAfterOmit<T, U> as `$${P}`]? : T[P];
};



export default IStyledPrefixAndOmitter;

//type IStyledSVGAtom = PrefixKeys<ISVGAtom, '$children'>;
