import { TUiColorTypes } from '@/types/TUiColorTypes';

import { TPageNumberList } from '@/components/atoms/PageNumberList';

export type TPaginator = {
  currentPage?: number;
  showPages?: number;
  themeType?: TUiColorTypes;
  outlinedButton?: boolean;
  onPageChange?: (page: number) => void;
  pageLimits?: number;
};

export type TPaginatorWithTPageNumberListProps = TPaginator & Omit<TPageNumberList, 'pageHandler'>;

export type TPaginatorWithHTMLAttrs = TPaginatorWithTPageNumberListProps & React.HTMLAttributes<HTMLDivElement>;
