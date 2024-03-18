import { MenuContainer } from './MenuList.style';
import { TMenuListWithHTMLAttributes } from './TMenueList.model';

// --------------------------------------------------------------------------- //
// ---------------- A simple MenuList that can have any childs --------------- //
// --------------------------------------------------------------------------- //
export default function MenuList(props: TMenuListWithHTMLAttributes) {
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
