import { create } from 'zustand';
import { updateThemeColors, uiColors, IUiColorPops } from './designColor';

export interface ColorGroup {
  [key: string]: string;
}

export interface Theme {
  primary: ColorGroup;
  accent: ColorGroup;
  secondary: ColorGroup;
  transparent: ColorGroup;
}


type ThemeState = {
  theme: Theme;
  updateTheme: (colors: IUiColorPops) => void;
};

const useThemeStore = create<ThemeState>((set) => ({
  theme: uiColors,
  updateTheme: (colors) => {
    updateThemeColors(colors);
    set({ theme: { ...uiColors } });
  },
}));

export default useThemeStore;
