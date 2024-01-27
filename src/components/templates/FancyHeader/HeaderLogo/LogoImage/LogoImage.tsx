import { FancyImageWrapper, TFancyImageWrapper } from '@/components/atoms/FancyImageWrapper';

export default function LogoImage(props: TFancyImageWrapper) {
  return <FancyImageWrapper {...props} sizeW="fit" />;
}
