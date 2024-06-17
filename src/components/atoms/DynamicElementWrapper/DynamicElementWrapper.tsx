import { TDynamicElementWrapperWithHTMLAttrs } from './TDynamicElementWrapper.model';
import { StyledDynamicElementWrapper } from './DynamicElementWrapper.style';

export default function DynamicElementWrapper(props: TDynamicElementWrapperWithHTMLAttrs) {
  const { as, externalStyle, children, ...htmlProps } = props;

  return (
    <StyledDynamicElementWrapper as={as} $externalStyle={externalStyle} {...htmlProps}>
      {children}
    </StyledDynamicElementWrapper>
  );
}
