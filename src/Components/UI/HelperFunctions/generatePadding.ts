import { spacing } from "../Design/design";

export function generatePadding(offsetValue?: number, secondValue: boolean = true) {
    const {xs, sm , md, lg } = spacing;
    const offset = offsetValue ? offsetValue : 0;
  
    const small  = `${xs * 1.5 + offset}px` + (secondValue ? ` ${xs * 2 + offset}px` : '');
    const medium = `${sm * 1.25 + offset}px` + (secondValue ? ` ${sm * 2 + offset}px` : '');
    const large  = `${md + offset}px` + (secondValue ? ` ${md * 2 + offset}px` : '');
  
    return { small, medium, large };
  };
  