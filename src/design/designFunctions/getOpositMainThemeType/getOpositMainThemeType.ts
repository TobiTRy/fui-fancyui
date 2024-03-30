// This function returns the opposite main theme type from the one passed as an argument

import { TUiColorTypes } from '@/types/TUiColorTypes';

//TODO: Create Docu
const getOpositMainThemeType = (mainThemeType?: TUiColorTypes) => {
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
