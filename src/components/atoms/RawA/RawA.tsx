import { StyledRawA } from '@/components/atoms/RawA/RawA.style';
import { TRawA } from './TRawA.model';

export default function RawA(props: TRawA) {
  const { children, externalStyle, ...htmlProps } = props;
  return (
    <StyledRawA $externalStyle={externalStyle} {...htmlProps}>
      {children}
    </StyledRawA>
  );
}
