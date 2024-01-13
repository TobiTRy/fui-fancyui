import { TUiColorsMain } from '@/types/TUiColorsMain';

// This function returns the opposite main theme type from the one passed as an argument
//TODO: Create Docu
const getOpositMainThemeType = (mainThemeType?: Extract<TUiColorsMain, 'primary' | 'secondary'>) => {
  switch (mainThemeType) {
    case 'primary':
      return 'secondary';
    case 'secondary':
      return 'primary';
    default:
      return 'primary';
  }
};

export default getOpositMainThemeType;
