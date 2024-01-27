import { themeStore } from '@/design/theme/themeStore';
import { IGenerateThemeItem } from '../IGenerateThemeItemProps.model';

export const generateBackgroundColor = (props: Pick<IGenerateThemeItem, '$themeType' | '$layer'>) => {
  const { $themeType, $layer } = props;
  const theme = themeStore.getState().theme;

  if ($themeType === 'transparent') {
    return 'transparent';
  } else {
    return theme.colors[$themeType ?? 'primary'][$layer ?? 0];
  }
};
