import { TAlign, TAlignCheckbox } from '@/components/organisms/FancyCheckbox/FancyCheckbox.model';
import { CSSProp } from 'styled-components';

export interface IFancySelectWrapper {
  label?: string;
  align?: TAlign;
  alignInput?: TAlignCheckbox;
  description?: string;
  id?: string;
  inputElement?: React.ReactNode;
  externalStyle?: CSSProp;
}
