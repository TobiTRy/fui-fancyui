import { create } from 'zustand';
import { updateThemeColors, uiColors, IUiColorPops, TUiColorsType, regenerateUiColors } from './designColor';
import { spacingPx, borderRadius, fontSizes } from '../designSizes';
import { TBorderRadiusSizes } from '@/Components/UI/Interface/TBorderRadius';

type TSpacings = keyof typeof spacingPx;

// If you need to access specific types within FontSizes, you can use indexing
type DesktopFontSizes = typeof fontSizes.desktop;
type MobileFontSizes = typeof fontSizes.mobile;

export type TTheme = {
  colors: TUiColorsType;
  spacing: {
    [key in TSpacings]: string;
  };
  borderRadius: {
    [key in TBorderRadiusSizes]: string;
  };
  fontSizes: {
    mobile: MobileFontSizes;
    desktop: DesktopFontSizes;
  };
};

type ThemeState = {
  theme: TTheme;
  isDarkTheme: boolean;
  switchTheme: () => void;
  updateTheme: (colors: IUiColorPops) => void;
};

// the store for the theme
const themeStore = create<ThemeState>((set, get) => ({
  theme: {
    colors: uiColors,
    spacing: spacingPx,
    borderRadius: borderRadius,
    fontSizes: fontSizes,
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
}));

export default themeStore;
