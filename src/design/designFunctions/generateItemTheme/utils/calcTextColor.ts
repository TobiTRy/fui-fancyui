import { themeStore } from '@/design/theme/themeStore';
import { IGenerateThemeItem } from '../IGenerateThemeItemProps.model';
import { flipThemeColor } from '@/design/designFunctions/flipThemeColor';

//this hanles the padding of the button deppend on the $size and if needs a second value
type IcalcTextColor = Pick<IGenerateThemeItem, '$textColor' | '$themeType' | '$outlined'>;
export const calcTextColor = ({ $textColor, $themeType, $outlined }: IcalcTextColor) => {
  const theme = themeStore.getState().theme;

  //  if the userer profides a $textColor use this
  if ($textColor) return theme.colors[$textColor][0];
  if ($themeType === 'transparent') return theme.colors.secondary[0];
  if ($outlined) return theme.colors[$themeType ?? 'secondary'][0];

  return flipThemeColor($themeType ?? 'secondary');
};
