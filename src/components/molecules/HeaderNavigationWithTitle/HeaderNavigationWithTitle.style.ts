import { combineClasses, getSizeClasses } from '@/utils/tailwind-bridge';
import type { TComponentSizesMid } from '@/types/TComponentSizes';

export function getContainerClasses(): string {
  return combineClasses(['flex', 'items-center', 'justify-between', 'w-full']);
}

export function getIconWrapperClasses(size: TComponentSizesMid): string {
  return combineClasses([
    'flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'text-inherit',
    'transition-fui',
    getSizeClasses(size).width,
  ]);
}
