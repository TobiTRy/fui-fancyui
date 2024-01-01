import { TLayer } from '@/types/TLayer';

export default function clampLayer(layer: number): TLayer {
  // limit layer to minimal 0
  if (layer < 0) {
    return 0;
  }
  // limit layer to maximal 10
  if (layer > 10) {
    return 10;
  }
  // return layer as TLayer
  return layer as TLayer;
}
