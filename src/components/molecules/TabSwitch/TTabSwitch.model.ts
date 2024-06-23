import { TSpacings } from '@/types/TSpacings';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TActiveSwitchIndicator } from '@/components/atoms/SwitchActiveIndicator';
import { TTabSwitchDetailsChildren, TTabSwitchDetailsLabelIcon } from '@/components/molecules/FancyTabSwitchButton';
import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TUiColorsMainAndAccent } from '@/types/TUiColorsMainAndAccent';

export type TTabSwitch = {
  wide?: boolean;
  sizeC?: TComponentSizes;
  textColor?: TUiColorsMain;
  activeTextThemeType?: TUiColorsMainAndAccent;
  textLayer?: TLayer;
  disabled?: boolean;
  tabSpacing?: TSpacings;
  values: TTabSwitchDetailsChildren[] & TTabSwitchDetailsLabelIcon[];
  borderRadius?: TThemeArrayOrValueCSS;
  direction?: 'horizontal' | 'vertical';
  indicatorType?: TActiveSwitchIndicator['type'];
  outlined?: boolean;
  currentSelect?: string;
  iconAlign?: 'left' | 'right';
  switchIndicatorThemeType?: TUiColorsNotTransparent;
  handler?: (value: string) => void;
};

export type TTabSwitchWithHTMLAtts = TTabSwitch & React.HTMLAttributes<HTMLUListElement>;
