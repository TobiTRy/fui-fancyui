import { StyledStystemMessage } from './SystemMessage.style';
import { TSystemMessage } from './TSystemMessage.model';
import { sizeSettings } from '@/components/atoms/FancyBox/sizeSettings';

export default function SystemMessage(props: TSystemMessage) {
  const { children, layer, sizeC = 'xs', themeType = 'error', padding, borderRadius, margin } = props;

  const calcBorderRadius = borderRadius ? borderRadius : sizeC ? sizeSettings[sizeC].borderRadius : undefined;
  const calcPadding = padding ? padding : sizeC ? sizeSettings[sizeC].padding : undefined;

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
