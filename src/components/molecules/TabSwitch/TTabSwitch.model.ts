import { TSpacings } from '@/types/TSpacings';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TActiveSwitchIndicator } from '@/components/atoms/SwitchActiveIndicator';
import { TTabSwitchDetailsChildren, TTabSwitchDetailsLabelIcon } from '@/components/molecules/FancyTabSwitchButton';
import { TLayer } from '@/types/TLayer';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TTabSwitch = {
  wide?: boolean;
  sizeC?: TComponentSizes;
  textColor?: TUiColorsMain;
  textLayer?: TLayer;
  disabled?: boolean;
  tabSpacing?: TSpacings;
  values: TTabSwitchDetailsChildren[] & TTabSwitchDetailsLabelIcon[];
  borderRadius?: TBorderRadiusSizes;
  direction?: 'horizontal' | 'vertical';
  indicatorType?: TActiveSwitchIndicator['type'];
  outlined?: boolean;
  currentSelect?: string;
  iconAlign?: 'left' | 'right';
  activeColor?: TUiColorsNotTransparent;
  handler?: (value: string) => void;
};

export type TTabSwitchWithHTMLAtts = TTabSwitch & React.HTMLAttributes<HTMLDivElement>;
