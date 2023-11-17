import { create } from 'zustand';
import { updateThemeColors, uiColors, IUiColorPops, TUiColorsType, regenerateUiColors } from './designColor';
import { spacingPx, borderRadius, fontSizes } from '../designSizes';

type TSpacings = keyof typeof spacingPx;

// If you need to access specific types within FontSizes, you can use indexing
type DesktopFontSizes = typeof fontSizes.desktop;
type MobileFontSizes = typeof fontSizes.mobile;

type TTheme = {
  colors: TUiColorsType;
  spacing: {
    [key in TSpacings]: string;
  };
  borderRadius: {
    [key in keyof typeof borderRadius]: string;
  };
  fontSizes: {
    mobile: MobileFontSizes;
    desktop: DesktopFontSizes;
  }
};

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
    regenerateUiColors(get().isDarkTheme);
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
