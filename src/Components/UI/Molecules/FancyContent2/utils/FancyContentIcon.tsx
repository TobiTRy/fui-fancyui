import { FancySVGAtom } from '../../../Atoms/FancySVGAtom';

interface IFancyContentIconProps {
  icon?: React.ReactNode;
  size?: React.ComponentProps<typeof FancySVGAtom>['size'];
}
export default function FancyContentIcon(props: IFancyContentIconProps) {
  const { icon, size } = props;
  return (
    <FancySVGAtom size={size} externalStyle={{ flexShrink: '0' }} isPassive>
      {icon}
    </FancySVGAtom>
  );
}
