import { FancySVGAtom } from '../../../atoms/FancySVGAtom';

interface IFancyContentIconProps {
  children?: React.ReactNode;
  size?: React.ComponentProps<typeof FancySVGAtom>['size'];
  'aria-label'?: string;
}
export function FancyContentIcon(props: IFancyContentIconProps) {
  const { children, size = 'md' } = props;
  return (
    <FancySVGAtom aria-label={props['aria-label']} size={size} externalStyle={{ flexShrink: '0' }} isPassive>
      {children}
    </FancySVGAtom>
  );
}
