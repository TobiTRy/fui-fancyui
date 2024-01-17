import { create } from 'zustand';
import {
  updateThemeColors,
  uiColors,
  IUiColorPops,
  regenerateUiColors,
} from '../generateThemeColor/generateThemeColor';
import { spacingPx, borderRadius, fontSizes } from '../designSizes';
import { TTheme } from '@/types/TTheme';
import { breakpoints } from '@/design/theme/brakePoints';

type ThemeState = {
  theme: TTheme;
  isDarkTheme: boolean;
  switchTheme: () => void;
  updateTheme: (colors: IUiColorPops) => void;
  setTheme: (theme: TTheme) => void;
};

// the store for the theme
const themeStore = create<ThemeState>((set, get) => ({
  theme: {
    colors: uiColors,
    spacing: spacingPx,
    borderRadius: borderRadius,
    fontSizes: fontSizes,
    breakpoints: breakpoints,
  },
  isDarkTheme: true,
  switchTheme: () => {
    regenerateUiColors(get().isDarkTheme);
    set((state) => ({
      isDarkTheme: !get().isDarkTheme,
      theme: {
        ...state.theme,
        colors: {
          ...uiColors,
          primary: get().isDarkTheme ? uiColors.secondary : uiColors.primary,
          secondary: get().isDarkTheme ? uiColors.primary : uiColors.secondary,
        },
      },
    }));
  },
  updateTheme: (colors) => {
    updateThemeColors(colors);
    set((state) => ({
      theme: {
        ...state.theme,
        colors: uiColors,
      },
    }));
  },
  setTheme: (theme) => {
    set(() => ({
      theme: {
        ...theme,
      },
    }));
  },
}));

export default themeStore;
