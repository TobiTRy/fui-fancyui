import { create } from 'zustand';
import { updateThemeColors, uiColors, IUiColorPops } from '../generateThemeColor/generateThemeColor';
import { spacingPx, borderRadius, typography } from '../designSizes';
import { TTheme } from '@/types/TTheme';
import { breakpoints } from '@/design/theme/brakePoints';
import { globalElementSizes } from '@/design/theme/globalSizes';

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
    color: uiColors,
    borderRadius: borderRadius,
    spacing: spacingPx,
    fontSizes: typography,
    breakpoints: breakpoints,
    globalElementSizes: globalElementSizes,
    outlined: {
      backgroundStrength: 0.5,
    },
  },
  isDarkTheme: true,
  switchTheme: () => {
    set((state) => {
      // Assuming regenerateUiColors updates the uiColors object
      return {
        isDarkTheme: !state.isDarkTheme,
        theme: {
          ...state.theme,
          color: {
            ...state.theme.color,
            primary: state.theme.color.secondary,
            secondary: state.theme.color.primary,
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
