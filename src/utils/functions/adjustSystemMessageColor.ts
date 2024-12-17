import { themeStore } from '@/design/theme/themeStore';

export const adjustSystemMessageColor = (color: string) => {
  const isDarkTheme = themeStore.getState().isDarkTheme;
  return isDarkTheme ? `hsla(from ${color} h s calc(l * 1.4) / 100%)` : `hsla(from ${color} h s calc(l * 0.55) / 100%)`;
};
