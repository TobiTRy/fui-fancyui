import { create } from 'zustand';
import { updateThemeColors, uiColors, IUiColorPops, TUiColorsType, regenerateUiColors } from './designColor';

type ThemeState = {
  theme: TUiColorsType;
  isDarkTheme: boolean;
  switchTheme: () => void;
  updateTheme: (colors: IUiColorPops) => void;
};

// the store for the theme
const themeStore = create<ThemeState>((set, get) => ({
  theme: uiColors,
  isDarkTheme: true,
  switchTheme: () => {
    regenerateUiColors(get().isDarkTheme)
    set({
      isDarkTheme: !get().isDarkTheme,
      theme: {
        ...uiColors,
        primary: get().isDarkTheme ? uiColors.secondary : uiColors.primary,
        secondary: get().isDarkTheme ? uiColors.primary : uiColors.secondary,
      },
    });
    console.log(get().isDarkTheme);
  },
  updateTheme: (colors) => {
    updateThemeColors(colors);
    set({ theme: { ...uiColors } });
  },
}));

export default themeStore;
