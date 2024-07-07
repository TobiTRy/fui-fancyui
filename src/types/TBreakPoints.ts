import { themeStore } from '@/design/theme/themeStore';

const bps = themeStore.getState().theme.breakpoints;

export type TBreakPoints = typeof bps;
export type TBreakPointsSizes = keyof typeof bps;
