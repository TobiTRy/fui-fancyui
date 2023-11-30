import { TLayer } from '@/interface/TLayer';

export function clampLayer(layer: number) {
  // limit layer to minimal 0
  if (layer < 0) {
    return 0 as TLayer;
  }
  // limit layer to maximal 10
  if (layer > 10) {
    return 10 as TLayer;
  }
  // return layer as TLayer
  return layer as TLayer;
}
