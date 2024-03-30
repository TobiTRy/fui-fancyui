import { FancyLiItem } from '@/components/atoms/FancyLI/FancyLI.style';
import { TFancyLIWithHTMLAttrs } from './TFancyLI.model';

// --------------------------------------------------------------------------- //
// ------------- The fancy LI Item that can dynamicly adjusted --------------- //
// --------------------------------------------------------------------------- //
export default function FancyLI(props: TFancyLIWithHTMLAttrs) {
  const { children, sizeC = 'md', aligned = 'left', ...htmlProps } = props;

  return (
    <FancyLiItem $sizeC={sizeC} $aligned={aligned} {...htmlProps}>
      {children}
    </FancyLiItem>
  );
}
