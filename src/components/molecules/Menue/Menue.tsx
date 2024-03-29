import { FancyMenuItem } from '@/components/templates/FancyMenuItem';
import { MenuContainer } from './Menue.style';
import { TMenueWithHTMLAttributes } from './TMenue.model';
import { ListDivider } from '@/components/atoms/ListDivider';

// --------------------------------------------------------------------------- //
// ---------------- A simple Menue that can have any childs --------------- //
// --------------------------------------------------------------------------- //
export default function Menue(props: TMenueWithHTMLAttributes) {
  const { children, themeType = 'primary', layer = 2, outlined, outlinedBackgroundStrength, ...htmlProps } = props;

  return (
    <MenuContainer
      $themeType={themeType}
      $layer={layer}
      $outlined={outlined}
      $outlinedBackgroundStrength={outlinedBackgroundStrength}
      {...htmlProps}
    >
      {children}
    </MenuContainer>
  );
}

Menue.Item = FancyMenuItem;
Menue.Divider = ListDivider;
