import { TLayer } from '@/types/TLayer';
import { clampNumbers } from '@/utils/functions/clampNumbers/clampNumber';

export default function clampLayer(layer: number): TLayer {
  return clampNumbers(layer, 0, 9) as TLayer;
}
