import { StyledStystemMessage } from './SystemMessage.style';
import { TSystemMessage } from './TSystemMessage.model';
import { sizes } from './sizeSettings';

export default function SystemMessage(props: TSystemMessage) {
  const { children, layer, sizeC = 'sm', themeType = 'error', padding, borderRadius, margin } = props;

  const calcBorderRadius = borderRadius ? borderRadius : sizeC ? sizes[sizeC].borderRadius : undefined;
  const calcPadding = padding ? padding : sizeC ? sizes[sizeC].padding : undefined;

  return (
    <StyledStystemMessage
      $padding={calcPadding}
      $margin={margin}
      $borderRadius={calcBorderRadius}
      $layer={layer}
      $themeType={themeType}
    >
      {children}
    </StyledStystemMessage>
  );
}
