import { IBorderRadiusNames, borderRadius } from "../../Design/design";

export interface IRoundedEdges {
  topRight?: boolean;
  topLeft?: boolean;
  bottomRight?: boolean;
  bottomLeft?: boolean;
}
// --------------------------------------------------------------------------- //
// ---------- this function is for the calc wich edege has a radius ---------- //
// --------------------------------------------------------------------------- //
const edgeCalculation = (edges: IRoundedEdges = {}, radius?: IBorderRadiusNames) => {
  const {topRight = true, topLeft= true, bottomRight = true, bottomLeft = true} = edges;
  
  // if no radius is given, use the large radius
  const calcRadius = radius ? borderRadius[radius] : borderRadius.lg;
  
  // creates for each edge a radius
  let result = '';
  if (topRight) result += ` ${calcRadius} `;
  else result += ` 0px `;
  if (topLeft) result += ` ${calcRadius} `;
  else result += ` 0px `;
  if (bottomRight) result += ` ${calcRadius} `;
  else result += ` 0px `;
  if (bottomLeft) result += ` ${calcRadius} `;
  else result += ` 0px `;
  return result;
}

export default edgeCalculation;