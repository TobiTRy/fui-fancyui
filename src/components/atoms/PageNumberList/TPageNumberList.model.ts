import { TGenerateThemeDesignForComponentProps } from '@/design/designFunctions/generateThemeDesignForComponent';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TPageNumberList = {
  showPages: number;
  currentPage: number;
  pageLimits?: number;
  pageHandler?: (page: number) => void;
  numberButtonStyle?: Omit<TGenerateThemeDesignForComponentProps, 'backgroundState' | 'useSimpleTextColor'> & {
    textColorActive?: TUiColorsNotTransparent;
  };
};
