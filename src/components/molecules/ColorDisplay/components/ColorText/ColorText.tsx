import Color from 'color';
import { Typography } from '@/components/atoms/Typography';
import { TComponentSizes } from '@/types/TComponentSizes';
import { sizeSettings } from './sizeSettings';

type ColorType = ReturnType<typeof Color>;

type TColorText = {
  sizeC?: TComponentSizes;
  colorValue: string | ColorType;
};
export default function ColorText(props: TColorText) {
  const { sizeC = 'sm', colorValue } = props;

  /* The Content to display the color and the copy icon */
  return <Typography variant={sizeSettings[sizeC].typographyVariant}>{colorValue.toString()}</Typography>;
}
