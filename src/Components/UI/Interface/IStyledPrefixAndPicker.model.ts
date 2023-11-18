type StringKeys<T> = Extract<keyof T, string>;

type RequiredKeysOfSubset<T, U extends StringKeys<T>> = {
    [K in U]: undefined extends T[K] ? never : K
}[U];

type OptionalKeysOfSubset<T, U extends StringKeys<T>> = Exclude<U, RequiredKeysOfSubset<T, U>>;

type IStyledPrefixAndPicker<T extends Record<string, any>, U extends StringKeys<T> = StringKeys<T>> = {
    // Required properties
    [P in RequiredKeysOfSubset<T, U> as `$${P}`]: T[P];
} & {
    // Optional properties
    [P in OptionalKeysOfSubset<T, U> as `$${P}`]? : T[P];
};

export default IStyledPrefixAndPicker;