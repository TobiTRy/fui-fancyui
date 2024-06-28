import { TInputLabel } from '@/components/atoms/InputLabel/TInputLabel.model';
import { TTextAlignLRC } from 'lib';
import { css } from 'styled-components';

type TgenerateLableVariant = {
  $lableVariant: TInputLabel['lableVariant'];
  $isActive?: boolean;
  $align?: TTextAlignLRC;
};

export function generateLableVariant(props: TgenerateLableVariant) {
  const { $lableVariant, $isActive, $align } = props;

  if ($lableVariant === 'static') {
    switch ($align) {
      case 'center':
        return css`
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'right':
        return css`
          top: 0;
          right: 0;
        `;
      default:
      case 'left':
        return css`
          top: 0;
          left: 0;
        `;
    }
  }

  switch ($align) {
    case 'center':
      return css`
        left: 50%;
        top: ${$isActive ? '8px' : '21px'};
        font-size: ${$isActive ? '12px' : '18px'};
        transform: translateX(-50%) translateY(-50%);
      `;
    case 'right':
      return css`
        top: ${$isActive ? '8px' : '21px'};
        right: 0;
        font-size: ${$isActive ? '12px' : '18px'};
        transform: translateY(-50%);
      `;
    case 'left':
    default:
      return css`
        top: ${$isActive ? '8px' : '21px'};
        font-size: ${$isActive ? '12px' : '18px'};
        transform: translateY(-50%);
      `;
  }
}
