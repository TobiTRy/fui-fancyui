import { Typography } from '@/components/atoms/Typography';
import { TComponentSizes } from '@/types/TComponentSizes';
import { sizeSettings } from './sizeSettings';

type TColorText = {
  sizeC: TComponentSizes;
  color: string;
};
export default function ColorText(props: TColorText) {
  const { sizeC, color } = props;

  /* The Content to display the color and the copy icon */
  return <Typography variant={sizeSettings[sizeC].typographyVariant}>{color.toString()}</Typography>;
}
