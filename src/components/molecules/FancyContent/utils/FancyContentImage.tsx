import { FancyImageWrapper, TFancyImageWrapperWithNativeAttrs } from '@/components/atoms/FancyImageWrapper';

export default function FancyContentImage(props: TFancyImageWrapperWithNativeAttrs) {
  const {
    aspectRatio,
    borderRadius = 'complete',
    sizeH = 'sm',
    children,
    objectFit = 'cover',
    ...wrapperProps
  } = props;
  return (
    <FancyImageWrapper
      sizeH={sizeH}
      aspectRatio={aspectRatio}
      borderRadius={borderRadius}
      objectFit={objectFit}
      {...wrapperProps}
    >
      {children}
    </FancyImageWrapper>
  );
}
