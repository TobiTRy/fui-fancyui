import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TDateOutput } from '@/components/atoms/DateOutput/TDateOutput.model';

export type TDateOutputFromTo = {
  sizeC?: TDateOutput['sizeC'];
  dateFrom?: Date;
  dateTo?: Date;
  handleFromTo?: (wich: 'from' | 'to') => void;
  whichIsSelecting?: 'from' | 'to';
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
  textCustom?: {
    from: TDateOutput['textCustom'];
    to: TDateOutput['textCustom'];
  };
};

type NativeHTMLProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type TDateOutputFromToWithNativeAttrs = TDateOutputFromTo & NativeHTMLProps;
