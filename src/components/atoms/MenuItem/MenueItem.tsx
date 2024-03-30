import { StyledMenuItem } from './MenueItem.style';
import { sizeSettings } from './sizeSettings';

import { TMenueItemWithHTMLAttrs } from '@/components/atoms/MenuItem/TMenueItem.model';

// --------------------------------------------------------------------------- //
//A Empty Menue Item that only handles the style you can put everythin as childs//
// --------------------------------------------------------------------------- //
export default function MenuItem(props: TMenueItemWithHTMLAttrs) {
  const { children, as, themeType, layer, sizeC = 'md', align, externalStyle, ...HTMLProps } = props;

  return (
    <StyledMenuItem
      as={as}
      $externalStyle={externalStyle}
      $themeType={themeType}
      $align={align}
      $layer={layer}
      $padding={sizeSettings[sizeC].padding}
      {...HTMLProps}
    >
      {children}
    </StyledMenuItem>
  );
}
