import Typography, { TypographyList } from "../../../Atoms/Typography/Typography";
import { sizes } from "./sizeSettings";

type IFancyContentTextProps = {
  text?: string;
  bold?: boolean;
};

type IFancyContentTextWithSizeProps = IFancyContentTextProps & {
  size: 'sm' | 'md' | 'lg';
  fontVariant?: never;
};

type IFancyContentTextWithFontVariantProps = IFancyContentTextProps & {
  fontVariant: keyof typeof TypographyList;
  size?: never;
};

export default function FancyContentText(
  props: IFancyContentTextProps & (IFancyContentTextWithFontVariantProps | IFancyContentTextWithSizeProps)
) {
  const { text, size, bold = true, fontVariant } = props;
  return (
    <Typography variant={fontVariant ?? sizes[size || 'sm'].fontSize} weight={bold ? 'bold' : 'normal'} type="button">
      {text}
    </Typography>
  );
}
