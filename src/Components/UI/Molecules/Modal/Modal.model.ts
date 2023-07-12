import IModalHeadLine from '../FancyModalHeadLine/FancyModalHeadLine.model';
import IModalBottomLine from '../../Molecules/ModalBottomLine/ModalBottomLine.model';
import { ComponentType } from 'react';

interface IFancyModal {
  headlineContent?: IModalHeadLine;
  bottomLineContent?: IModalBottomLine;
  Content?: ComponentType;
  children?: React.ReactNode;
}

export default IFancyModal;