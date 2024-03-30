import { FancyMenuItem } from '@/components/templates/FancyMenuItem';
import { MenueContainer } from './Menu.style';
import { TMenuWithHTMLAttributes } from './TMenu.model';
import { ListDivider } from '@/components/atoms/ListDivider';

// --------------------------------------------------------------------------- //
// ---------------- A simple Menue that can have any childs --------------- //
// --------------------------------------------------------------------------- //
function Menu(props: TMenuWithHTMLAttributes) {
  const { children, themeType = 'primary', layer = 2, outlined, outlinedBackgroundStrength, ...htmlProps } = props;

  return (
    <MenueContainer
      $themeType={themeType}
      $layer={layer}
      $outlined={outlined}
      $outlinedBackgroundStrength={outlinedBackgroundStrength}
      {...htmlProps}
    >
      {children}
    </MenueContainer>
  );
}

Menu.Item = FancyMenuItem;
Menu.Divider = ListDivider;

export default Menu;
