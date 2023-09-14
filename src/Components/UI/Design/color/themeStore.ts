import { create } from 'zustand';
import { updateThemeColors, uiColors, IUiColorPops, TUiColorsType } from './designColor';

type ThemeState = {
  theme: TUiColorsType;
  darkTheme: boolean;
  switchTheme: () => void;
  updateTheme: (colors: IUiColorPops) => void;
};

// the store for the theme
const themeStore = create<ThemeState>((set, get) => ({
  theme: uiColors,
  darkTheme: true,
  switchTheme: () => {
  
    set({
      darkTheme: !get().darkTheme,
      theme: {
        ...uiColors,
        primary: get().darkTheme ? uiColors.secondary : uiColors.primary,
        secondary: get().darkTheme ? uiColors.primary : uiColors.secondary,
      },
    });
  },
  updateTheme: (colors) => {
    updateThemeColors(colors);
    set({ theme: { ...uiColors } });
  },
}));

export default themeStore;
