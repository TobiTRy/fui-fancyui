import { create } from 'zustand';
import { updateThemeColors, uiColors, IUiColorPops } from '../generateThemeColor/generateThemeColor';
import { spacingPx, borderRadius, typography } from '../designSizes';
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
const themeStore = create<ThemeState>((set) => ({
  theme: {
    colors: uiColors,
    spacing: spacingPx,
    borderRadius: borderRadius,
    fontSizes: typography,
    breakpoints: breakpoints,
  },
  isDarkTheme: true,
  switchTheme: () => {
    set((state) => {
      // Assuming regenerateUiColors updates the uiColors object
      return {
        isDarkTheme: !state.isDarkTheme,
        theme: {
          ...state.theme,
          colors: {
            ...state.theme.colors,
            primary: state.theme.colors.secondary,
            secondary: state.theme.colors.primary,
          },
        },
      };
    });
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
