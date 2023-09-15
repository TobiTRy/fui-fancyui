import { create } from 'zustand';
import { updateThemeColors, uiColors, IUiColorPops, TUiColorsType } from './designColor';

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
  
    set({
      isDarkTheme: !get().isDarkTheme,
      theme: {
        ...uiColors,
        primary: get().isDarkTheme ? uiColors.secondary : uiColors.primary,
        secondary: get().isDarkTheme ? uiColors.primary : uiColors.secondary,
      },
    });
  },
  updateTheme: (colors) => {
    updateThemeColors(colors);
    set({ theme: { ...uiColors } });
  },
}));

export default themeStore;
