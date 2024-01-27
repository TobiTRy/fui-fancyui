import { FancyImageWrapper, TFancyImageWrapper } from '@/components/atoms/FancyImageWrapper';

export default function ChipImg(props: TFancyImageWrapper) {
  return <FancyImageWrapper aspectRatio="1/1" sizeH="fit" objectFit="cover" borderRadius="complete" {...props} />;
}
