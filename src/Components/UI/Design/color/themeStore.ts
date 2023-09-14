import { create } from 'zustand';
import { updateThemeColors, uiColors, IUiColorPops, TUiColorsType } from './designColor';


type ThemeState = {
  theme: TUiColorsType;
  switchTheme: () => void;
  updateTheme: (colors: IUiColorPops) => void;
};

// the store for the theme
const themeStore = create<ThemeState>((set) => ({
  theme: uiColors,
  switchTheme: () => {
    const primary = uiColors.primary;
    const secondary = uiColors.secondary;

    set({
      theme: {
        ...uiColors,
        primary: secondary,
        secondary: primary,
      },
    });
  },
  updateTheme: (colors) => {
    updateThemeColors(colors);
    set({ theme: { ...uiColors } });
  },
}));

export default themeStore;
