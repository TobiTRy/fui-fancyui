import { spacing } from "../../Design/design";

export function generatePadding(offsetValue?: number, secondValue?: boolean) {
    const { xs, sm, md } = spacing;
    const offset = offsetValue ? offsetValue : 0;
  
    const small  = `${xs * 1.75 + offset}px` + (secondValue ? ` ${xs * 2 + offset}px` : '');
    const medium = `${sm * 1.25 + offset}px` + (secondValue ? ` ${sm * 2 + offset}px` : '');
    const large  = `${sm * 1.5 + offset}px` + (secondValue ? ` ${md * 2 + offset}px` : '');
  
    return { small, medium, large };
  };
  