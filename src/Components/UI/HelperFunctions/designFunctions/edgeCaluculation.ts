import { borderRadius } from '../../Design/designSizes';

// the border radius sizes
type IBorderRadiusSizes = keyof typeof borderRadius;

// the edge can be a string, number or IBorderRadiusSizes
type TEdge = IBorderRadiusSizes | string | number;

// the rounded edges are an array of 4 values
export type IRoundedEdges = [TEdge?, TEdge?, TEdge?, TEdge?];

// check if value is typeof IBorderRadiusSizes
const checkValueIsBorderRadius = (value: string | IBorderRadiusSizes | number) => {
  //check if value is typeof IBorderRadiusSizes
  if (borderRadius[value as IBorderRadiusSizes]) return true;
  
  return false;
};


// get the value of the radius if it is a IBorderRadiusSizes
const getRadiusValue = (edge: TEdge): string => {
  if (checkValueIsBorderRadius(edge)) {
    return `${borderRadius[edge as IBorderRadiusSizes]}`;
  }
  return `${edge}`;
};

// --------------------------------------------------------------------------- //
// ---------- this function is for the calc wich edege has a radius ---------- //
// --------------------------------------------------------------------------- //
const edgeCalculation = (edges?: IRoundedEdges): string | undefined => {
  if (!edges?.length) return;

  //check edges are valid
  const validEdges = edges.filter(edge => edge !== undefined) as TEdge[];

  switch (validEdges.length) {
    // if one value is given, all edges are the same
    case 1: {
      const singleRadius = getRadiusValue(validEdges[0]);
      return ` ${singleRadius} `;
    }
    // if two values are given, top/bottom and left/right are the same
    case 2: {
      const [topBottomRadius, leftRightRadius] = validEdges.map(getRadiusValue);
      return ` ${topBottomRadius} ${leftRightRadius} `;
    }
    // if three values are given, top, left/right and bottom are the same
    case 3: {
      const [topRadius, leftRadius, rightRadius] = validEdges.map(getRadiusValue);
      return ` ${topRadius} ${leftRadius} ${rightRadius} ${leftRadius} `;
    }
    // if four values are given, all edges are different
    case 4: {
      const [top, right, bottom, left] = validEdges.map(getRadiusValue);
      return ` ${top} ${right} ${bottom} ${left} `;
    }
  }
};

export default edgeCalculation;
