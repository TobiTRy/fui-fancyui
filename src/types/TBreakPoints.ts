import { themeStore } from '@/design/theme/themeStore';

const bps = themeStore.getState().theme.breakpoints;

export type TBreakPoints = keyof typeof bps;
