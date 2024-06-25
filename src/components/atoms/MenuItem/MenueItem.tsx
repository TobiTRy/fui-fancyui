import { StyledMenuItem } from './MenueItem.style';
import { sizeSettings } from './sizeSettings';

import { TMenueItemWithHTMLAttrs } from '@/components/atoms/MenuItem/TMenueItem.model';

// --------------------------------------------------------------------------- //
//A Empty Menue Item that only handles the style you can put everythin as childs//
// --------------------------------------------------------------------------- //
export default function MenuItem(props: TMenueItemWithHTMLAttrs) {
  const {
    children,
    as,
    themeType = 'primary',
    layer = 3,
    sizeC = 'sm',
    align,
    externalStyle,
    outlined,
    outlinedBackgroundStrength,
    ...HTMLProps
  } = props;

  return (
    <StyledMenuItem
      as={as}
      $externalStyle={externalStyle}
      $themeType={themeType}
      $align={align}
      $layer={layer}
      $padding={sizeSettings[sizeC].padding}
      $outlined={outlined}
      $outlinedBackgroundStrength={outlinedBackgroundStrength}
      {...HTMLProps}
    >
      {children}
    </StyledMenuItem>
  );
}
