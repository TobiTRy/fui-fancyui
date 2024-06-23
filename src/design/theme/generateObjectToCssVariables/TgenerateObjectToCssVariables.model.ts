export type TThemeValue = string | number | TThemeObject;

export type TThemeObject = {
  [key: string]: TThemeValue;
};
