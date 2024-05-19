import { TLayer } from '@/types/TLayer';
import { clampNumber } from '@/utils/functions/clampNumber/clampNumber';

export default function clampLayer(layer: number): TLayer {
  return clampNumber(layer, 0, 9) as TLayer;
}
