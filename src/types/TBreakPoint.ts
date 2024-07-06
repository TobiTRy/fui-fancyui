import { TBreakPoints } from '@/types/TBreakPoints';

export type TBreakpoint = {
  id: TBreakPoints; // Breakpoint ID (e.g., 'sm')
  query: string; // Media query string (e.g., '(min-width: 768px)')
};
