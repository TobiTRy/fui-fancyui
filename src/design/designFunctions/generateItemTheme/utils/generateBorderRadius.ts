import { themeStore } from '@/design/theme/themeStore';
import { IGenerateThemeItem } from '../IGenerateThemeItemProps.model';

export const generateBorderRadius = (props: Pick<IGenerateThemeItem, '$wide' | '$borderRadius' | '$sizeC'>): string => {
  const { $wide, $borderRadius, $sizeC } = props;
  const borderRadius = themeStore.getState().theme.borderRadius;

  // if border radius is provided use this
  if ($borderRadius) {
    return borderRadius[$borderRadius];
    // if the button is wide use the lg border radius
  } else if ($wide) {
    return borderRadius.lg;
    // else use the $sizeC of the button to calculate the border radius
  } else {
    return borderRadius[$sizeC];
  }
};
