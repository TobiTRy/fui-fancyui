import { spacing } from "../Design/design";

export function generatePadding(offsetValue?: number, secondValue: boolean = true) {
    const { sm , md, lg } = spacing;
    const offset = offsetValue ? offsetValue : 0;
  
    const small  = `${sm + offset}px` + (secondValue ? ` ${sm * 2 + offset}px` : '');
    const medium = `${md + offset}px` + (secondValue ? ` ${md * 2 + offset}px` : '');
    const large  = `${lg + offset}px` + (secondValue ? ` ${lg * 2 + offset}px` : '');
  
    return { small, medium, large };
  };
  