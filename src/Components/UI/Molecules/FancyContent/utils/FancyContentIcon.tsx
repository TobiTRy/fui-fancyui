import { FancySVGAtom } from '../../../Atoms/FancySVGAtom';

interface IFancyContentIconProps {
  children?: React.ReactNode;
  size?: React.ComponentProps<typeof FancySVGAtom>['size'];
}
export default function FancyContentIcon(props: IFancyContentIconProps) {
  const { children, size } = props;
  return (
    <FancySVGAtom size={size} externalStyle={{ flexShrink: '0' }} isPassive>
      {children}
    </FancySVGAtom>
  );
}
