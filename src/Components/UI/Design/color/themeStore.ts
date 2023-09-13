import { create } from 'zustand';
import { updateThemeColors, uiColors, IUiColorPops, TUiColorsType } from './designColor';


type ThemeState = {
  theme: TUiColorsType;
  updateTheme: (colors: IUiColorPops) => void;
};

// the store for the theme
const themeStore = create<ThemeState>((set) => ({
  theme: uiColors,
  updateTheme: (colors) => {
    updateThemeColors(colors);
    set({ theme: { ...uiColors } });
  },
}));

export default themeStore;
