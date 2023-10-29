import { TypographyList } from "../../../Atoms/Typography/Typography";
import { spacingPx } from "../../../Design/design";

// Define the sizes for the FancyContent component
export const sizes = {
  sm: {
    fontSize: 'smText' as keyof typeof TypographyList,
    padding: spacingPx.xs,
  },
  md: {
    fontSize: 'content' as keyof typeof TypographyList,
    padding: spacingPx.sm,
  },
  lg: {
    fontSize: 'button' as keyof typeof TypographyList,
    padding: spacingPx.md,
  },
};