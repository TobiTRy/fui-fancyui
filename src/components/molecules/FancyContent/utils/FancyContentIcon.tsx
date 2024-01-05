import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { sizesSettings } from '@/components/molecules/Chip/sizeSettings';

interface IFancyContentIconProps {
  children?: React.ReactNode;
  size?: keyof typeof sizesSettings;
  'aria-label'?: string;
}
export function FancyContentIcon(props: IFancyContentIconProps) {
  const { children, size = 'sm' } = props;

  return (
    <FancySVGAtom
      aria-label={props['aria-label']}
      size={sizesSettings[size].iconSize}
      externalStyle={{ flexShrink: '0' }}
      isPassive
    >
      {children}
    </FancySVGAtom>
  );
}
