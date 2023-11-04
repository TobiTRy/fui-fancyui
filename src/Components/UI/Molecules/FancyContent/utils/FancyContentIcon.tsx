import { FancySVGAtom } from '../../../Atoms/FancySVGAtom';

interface IFancyContentIconProps {
  children?: React.ReactNode;
  size?: React.ComponentProps<typeof FancySVGAtom>['size'];
}
export function FancyContentIcon(props: IFancyContentIconProps) {
  const { children, size = 'md' } = props;
  return (
    <FancySVGAtom size={size} externalStyle={{ flexShrink: '0' }} isPassive>
      {children}
    </FancySVGAtom>
  );
}