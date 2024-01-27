import { TLayer } from '@/types/TLayer';
import { clampLayer } from '@/utils/functions/clampLayer';

export default function countNegativLayerUpwards(layer: number, deductLayer: number): TLayer {
  const verifiedDeductLayer = clampLayer(deductLayer);
  const calcNewLayer = layer - verifiedDeductLayer;

  if (layer - deductLayer < 0) {
    let calcedLayer = Math.abs(calcNewLayer);
    // if the calculated layer is the same as the original layer, add 1 to the calculated layer
    if (layer === calcedLayer) calcedLayer += 2;
    return clampLayer(calcedLayer);
  }

  return clampLayer(calcNewLayer);
}
