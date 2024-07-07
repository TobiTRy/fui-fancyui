import { TBreakPointsSizes } from '@/types/TBreakPoints';

export type TBreakpoint = {
  id: TBreakPointsSizes; // Breakpoint ID (e.g., 'sm')
  query: string; // Media query string (e.g., '(min-width: 768px)')
};
